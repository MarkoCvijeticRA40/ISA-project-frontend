import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Center } from 'src/app/model/center.model';
import { DonorPoll } from 'src/app/model/donor-poll.model';
import { Freeapointment } from 'src/app/model/freeapointment.model';
import { RegisteredUser } from 'src/app/model/registered-user.model';
import { Scheduledappointment } from 'src/app/model/scheduledappointment.model';
import { CenterService } from 'src/app/service/center.service';
import { DonorPollService } from 'src/app/service/donor-poll.service';
import { PerformedAppointmentService } from 'src/app/service/performed-appointment.service';
import { ScheduledappointmentService } from 'src/app/service/scheduledappointment.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-scheduled-appointment',
  templateUrl: './create-scheduled-appointment.component.html',
  styleUrls: ['./create-scheduled-appointment.component.css']
})
export class CreateScheduledAppointmentComponent implements OnInit {

  startDate : Date = new Date();
  dateString : any;
  ascOrDesc: any;
  public centers: Center[] = [];
  public emptyList : Center[] = [];
  public freeAppointment : Freeapointment = new Freeapointment();
  public scheduledAppointment : Scheduledappointment = new Scheduledappointment();
  public user : RegisteredUser = new RegisteredUser();
  public donorPoll : DonorPoll = new DonorPoll();
  public isDonorPollFilled: boolean = false;
  public hasDonatedBloodInLastSixMonths: boolean = false;
  hour : number = 8;
  minute : number = 0;
  centerId : number = 0;

  hours = [
    {value: 8,  viewValue: '08'},
    {value: 9,  viewValue: '09'},
    {value: 10, viewValue: '10'},
    {value: 11, viewValue: '11'},
    {value: 12, viewValue: '12'},
    {value: 13, viewValue: '13'},
    {value: 14, viewValue: '14'},
    {value: 15, viewValue: '15'},
    {value: 16, viewValue: '16'},
    {value: 17, viewValue: '17'},
    {value: 18, viewValue: '18'},
    {value: 19, viewValue: '19'},
    {value: 20, viewValue: '20'},
    {value: 21, viewValue: '21'},
    {value: 22, viewValue: '22'},
  ];

  minutes = [
    {value: 0,   viewValue: '00'},
    {value: 15,  viewValue: '15'},
    {value: 30,  viewValue: '30'},
    {value: 60,  viewValue: '60'},
  ];

  constructor(private router : Router,private centerService : CenterService,private scheduledAppointmentService : ScheduledappointmentService,private userService : UserService,private donorPollService : DonorPollService,private performedAppointmentService : PerformedAppointmentService) { }

  public GetAvailableCenters() {
    
    this.ConvertDateToString();

    if(new Date().getTime() - this.freeAppointment.date.getTime() > 0) 
    {
        alert("You can't make an appointment because it's in the past!");
    }
    else 
    { 
      this.centerService.getAvailableCenters(this.dateString,this.ascOrDesc).subscribe(res => {
        this.centers = res;  
      })
    }
  }

  public ConvertDateToString() {
    this.freeAppointment.date.setHours(1);
    this.freeAppointment.date.setSeconds(0);
    this.freeAppointment.date.setMilliseconds(0);
    this.freeAppointment.date.setHours(this.hour);
    this.freeAppointment.date.setHours(this.freeAppointment.date.getHours() + 1);
    this.freeAppointment.date.setMinutes(this.minute);
    this.dateString = this.freeAppointment.date.toISOString();
    this.dateString = this.dateString.replace("Z","");
  }

  public specificSchedule(center : Center) {
    this.centerId = center.id;
    this.scheduledAppointmentService.specificSchedule(this.dateString, this.userService.currentUser.id,this.centerId).subscribe(res => {
      alert('Appointment is scheduled!');
    })
    this.centers = this.emptyList;
    this.ngOnInit();
  }

  sortByAvgGradeAsc() {
    this.ascOrDesc = "asc";
    this.centerService.getAvailableCenters(this.dateString,this.ascOrDesc).subscribe(res => {
      this.centers = res;  
    })
  }

  sortByAvgGradeDesc() {
    this.ascOrDesc = "desc";
    this.centerService.getAvailableCenters(this.dateString,this.ascOrDesc).subscribe(res => {
      this.centers = res;  
    })
  }

  ngOnInit(): void {
    this.userService.find(this.userService.currentUser.email).subscribe(res => {
      this.user = res; 
    });

    this.donorPollService.isPollFilled(this.userService.currentUser.id).subscribe(res => {
      this.isDonorPollFilled = res;
        console.log('is poll filled ' + this.isDonorPollFilled);
    });
    this.performedAppointmentService.hasDonatedBloodInLastSixMonths(this.userService.currentUser.id).subscribe(res => {  
      this.hasDonatedBloodInLastSixMonths = res;
        console.log("has donated in last six months: " + this.hasDonatedBloodInLastSixMonths);
    }); 
  }  
}