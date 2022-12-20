import { Component, OnInit } from '@angular/core';
import { Center } from 'src/app/model/center.model';
import { Freeapointment } from 'src/app/model/freeapointment.model';
import { Medicalstaff } from 'src/app/model/medicalstaff.model';
import { RegisteredUser } from 'src/app/model/registered-user.model';
import { FreeappointmentService } from 'src/app/service/freeappointment.service';
import { UserService } from 'src/app/service/user.service';
import { Address } from 'src/app/model/address.model';

@Component({
  selector: 'app-ca-create-free-app',
  templateUrl: './ca-create-free-app.component.html',
  styleUrls: ['./ca-create-free-app.component.css']
})
export class CaCreateFreeAppComponent implements OnInit {

  startDate : Date = new Date();

  public freeAppointment : Freeapointment = new Freeapointment();
  
  public medicalStaff : Medicalstaff = new Medicalstaff();

  public centerForFreeApp : Center = new Center();

  public adressForFreeApp : Address = new Address();

  hour : number = 8;

  minute : number = 0;
  
  
  hours = [
    {value: 8,  viewValue: '08'},
    {value: 9,  viewValue: '09'},
    {value: 10, viewValue: '10'},
    {value: 11, viewValue: '11'},
    {value: 12, viewValue: '12'},
    {value: 13, viewValue: '13'},
  ];

  minutes = [
    {value: 0,   viewValue: '00'},
    {value: 15,  viewValue: '15'},
    {value: 30,  viewValue: '30'},
    {value: 60,  viewValue: '60'},
  ];

  durations = [
    {value: 15, viewValue: "15"},
    {value: 30, viewValue: "30"},
    {value: 45, viewValue: "45"},
    {value: 60, viewValue: "60"},
  ];
  
  constructor(private freeAppointmentService: FreeappointmentService,private userService: UserService) 
  { 
    this.startDate.setDate(this.startDate.getDate() + 1);
  }


  public createFreeAppointment() {
    this.freeAppointment.date.setHours(1);
    if(this.minute != 0)
    {
      this.freeAppointment.date.setMinutes(this.minute);
    }
    else
    {
      this.freeAppointment.date.setMinutes(0);
    }
    this.freeAppointment.date.setHours(this.hour);
    this.freeAppointment.date.setMinutes(this.minute);
    this.freeAppointmentService.createFreeAppointment(this.freeAppointment).subscribe(res => {
      this.freeAppointment = res;
      alert("You have successfully created a free appointment");
      location.reload();
    })
  }

  ngOnInit(): void {
    this.centerForFreeApp.id = 1;
    this.freeAppointment.duration = 15;
    this.centerForFreeApp.address = this.adressForFreeApp;
    this.freeAppointment.center = this.centerForFreeApp;
    this.userService.findAdministrator("milan@gmail.com").subscribe(res => {
      this.medicalStaff = res;  
        this.freeAppointment.medicalStaff = this.medicalStaff; 
    })
  }
}