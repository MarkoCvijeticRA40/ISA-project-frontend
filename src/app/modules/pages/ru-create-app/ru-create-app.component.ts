import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { scheduled } from 'rxjs';
import { Center } from 'src/app/model/center.model';
import { DonorPoll } from 'src/app/model/donor-poll.model';
import { Freeapointment } from 'src/app/model/freeapointment.model';
import { MedicalStaff } from 'src/app/model/medical-staff.model';
import { Scheduledappointment } from 'src/app/model/scheduledappointment.model';
import { CenterService } from 'src/app/service/center.service';
import { FreeappointmentService } from 'src/app/service/freeappointment.service';
import { ScheduledappointmentService } from 'src/app/service/scheduledappointment.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-ru-create-app',
  templateUrl: './ru-create-app.component.html',
  styleUrls: ['./ru-create-app.component.css']
})
export class RuCreateAppComponent implements OnInit {

  startDate : Date = new Date();

  public freeAppointmentsDataSource: Freeapointment[] = [];
  
  public displayedColumns = ['name', 'description', 'address', 'workTime', 'averageGrade'];

  public stringForSplit : string = '';

  public centers: Center[] = [];

  public center : Center = new Center();

  public freeAppointments : Freeapointment[] = [];

  public freeAppointment : Freeapointment = new Freeapointment();

  public scheduledAppointment : Scheduledappointment = new Scheduledappointment();

  public medicalStaff : MedicalStaff = new MedicalStaff();

  public donorPoll : DonorPoll = new DonorPoll();

  hour : number = 8;

  minute : number = 0;

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

  constructor(private freeAppointmentService : FreeappointmentService,private centerService : CenterService,private scheduledAppointmentService : ScheduledappointmentService,private userService : UserService) { }

  public getByDate() { 
    this.freeAppointment.date.setHours(1);
    this.freeAppointment.date.setSeconds(0);
    this.freeAppointment.date.setMilliseconds(0);
    this.freeAppointment.date.setHours(this.hour);
    this.freeAppointment.date.setHours(this.freeAppointment.date.getHours() + 1);
    this.freeAppointment.date.setMinutes(this.minute);
    var dateString = this.freeAppointment.date.toISOString();
    dateString = dateString.replace("Z","");

    this.freeAppointmentService.getByDate(dateString).subscribe(res => {
      this.freeAppointments = res;
        this.freeAppointmentsDataSource = this.freeAppointments;
    })
  }

  public createScheduledAppointment(freeapointmentForFunction : Freeapointment) {
    this.scheduledAppointment.center = freeapointmentForFunction.center;
    this.scheduledAppointment.date = freeapointmentForFunction.date;
    this.scheduledAppointment.duration = freeapointmentForFunction.duration;
    this.scheduledAppointment.medicalStaff = freeapointmentForFunction.medicalStaff;
    this.scheduledAppointment.registeredUser = this.medicalStaff; 
    this.scheduledAppointment.bloodDonorInfo = this.donorPoll;
    this.scheduledAppointment.center = this.center;
    
    this.scheduledAppointmentService.createScheduledAppointment(this.scheduledAppointment).subscribe(res => {
      this.scheduledAppointment = res;
      alert("You have successfully scheduled appointment");
      this.scheduledAppointment = new Scheduledappointment();
      this.ngOnInit();
    });
  }


  ngOnInit(): void {
    this.userService.findAdministrator("milan@gmail.com").subscribe(res => {
      this.medicalStaff = res;  
        this.freeAppointment.medicalStaff = this.medicalStaff; 
    })  
    this.centerService.getCenterByMedicalStaffId(1).subscribe(res => {
      this.center = res;   
    })
  }
}
