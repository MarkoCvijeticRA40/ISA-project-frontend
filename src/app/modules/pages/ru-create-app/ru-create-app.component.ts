import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Center } from 'src/app/model/center.model';

@Component({
  selector: 'app-ru-create-app',
  templateUrl: './ru-create-app.component.html',
  styleUrls: ['./ru-create-app.component.css']
})
export class RuCreateAppComponent implements OnInit {

  startDate : Date = new Date();

  public dataSource = new MatTableDataSource<Center>();
  
  public displayedColumns = ['name', 'description', 'address', 'workTime', 'averageGrade'];

  public centers: Center[] = [];
  
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
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.centers;
  }

}
