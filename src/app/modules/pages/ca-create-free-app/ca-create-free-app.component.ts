import { Component, OnInit } from '@angular/core';
import { Center } from 'src/app/model/center.model';
import { Freeapointment } from 'src/app/model/freeapointment.model';
import { Medicalstaff } from 'src/app/model/medicalstaff.model';

@Component({
  selector: 'app-ca-create-free-app',
  templateUrl: './ca-create-free-app.component.html',
  styleUrls: ['./ca-create-free-app.component.css']
})
export class CaCreateFreeAppComponent implements OnInit {

  startDate : Date = new Date();

  freeAppointment : Freeapointment = new Freeapointment();

  medicalStaff : Medicalstaff = new Medicalstaff();

  center : Center = new Center();
  
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
    {value: '15', viewValue: '15'},
    {value: '30', viewValue: '30'},
  ];
  
  constructor() { }

  ngOnInit(): void {
    this.center.medicalStaff.push(this.medicalStaff);
  }

}
