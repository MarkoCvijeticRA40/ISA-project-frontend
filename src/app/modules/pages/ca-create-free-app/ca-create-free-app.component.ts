import { Component, OnInit } from '@angular/core';
import { Center } from 'src/app/model/center.model';
import { Freeapointment } from 'src/app/model/freeapointment.model';
import { Medicalstaff } from 'src/app/model/medicalstaff.model';
import { RegisteredUser } from 'src/app/model/registered-user.model';
import { FreeappointmentService } from 'src/app/service/freeappointment.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-ca-create-free-app',
  templateUrl: './ca-create-free-app.component.html',
  styleUrls: ['./ca-create-free-app.component.css']
})
export class CaCreateFreeAppComponent implements OnInit {

  startDate : Date = new Date();

  public freeAppointment : Freeapointment = new Freeapointment();

  public medicalStaff : Medicalstaff = new Medicalstaff();

  public center : Center = new Center();
  
  times = [
    {value: '8:00', viewValue: '8:00'},
    {value: '8:30', viewValue: '8:30'},
    {value: '9:00', viewValue: '9:00'},
    {value: '9:30', viewValue: '9:30'},
    {value: '10:00', viewValue: '10:00'},
    {value: '10:30', viewValue: '10:30'},
    {value: '11:00', viewValue: '11:00'},
    {value: '11:30', viewValue: '11:30'},
    {value: '12:00', viewValue: '12:00'},
    {value: '12:30', viewValue: '12:30'},
    {value: '13:00', viewValue: '13:00'},
  ];

  durations = [
    {value: 15, viewValue: "15"},
    {value: 30, viewValue: "30"},
  ];
  
  constructor(private freeAppointmentService: FreeappointmentService,private userService: UserService) { }

  public createFreeAppointment() {
    this.freeAppointmentService.createFreeAppointment(this.freeAppointment).subscribe(res => {
      this.freeAppointment = res;
    })
  }

  ngOnInit(): void {
    this.userService.findAdministrator("milan@gmail.com").subscribe(res => {
      this.medicalStaff = res;  
        this.freeAppointment.medicalStaff = this.medicalStaff; 
    })
  }
}