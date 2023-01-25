import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, View } from '@syncfusion/ej2-angular-schedule';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@Component({
  selector: 'app-working-calendar',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: `<ejs-schedule> </ejs-schedule>`,
  templateUrl: './working-calendar.component.html',
  styleUrls: ['./working-calendar.component.css'],
  

})
export class WorkingCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
