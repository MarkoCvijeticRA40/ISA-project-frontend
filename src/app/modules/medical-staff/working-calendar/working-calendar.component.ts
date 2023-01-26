import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScheduledappointmentService } from 'src/app/service/scheduledappointment.service';
import { Scheduledappointment } from 'src/app/model/scheduledappointment.model'
import { ScheduldedAppointmentCalendar } from 'src/app/model/schedulded-appointment-calendar.model'
import { CenterService } from 'src/app/service/center.service';
import { UserService } from 'src/app/service/user.service';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-working-calendar',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  templateUrl: './working-calendar.component.html',
  styleUrls: ['./working-calendar.component.css'],
  

})
export class WorkingCalendarComponent implements OnInit {

  public scheduledappointmentDataSource: ScheduldedAppointmentCalendar[] = [];
 
  constructor(private centerService : CenterService,private scheduledAppointmentService : ScheduledappointmentService,private userService : UserService) { }
  public view : View = 'Month'
  public views: View[] = [ "Week", "Month","Year"]

  public eventObject : EventSettingsModel = {
 
    allowAdding:false, 
    allowEditing:false,
    allowDeleting:false
  }
  
  ngOnInit(): void {

    this.centerService.getCenterByMedicalStaffId(this.userService.currentUser.id).subscribe(res =>{
        this.scheduledAppointmentService.getScheduleAppointmentByCenterId(res.id).subscribe(res =>{
          res.forEach((s) => {
          s.date = new Date(Number(s.date.toString().split(',')[0]), Number(s.date.toString().split(',')[1]) - 1, Number(s.date.toString().split(',')[2]), Number(s.date.toString().split(',')[3]), Number(s.date.toString().split(',')[4]));
            
            this.scheduledappointmentDataSource.push(new ScheduldedAppointmentCalendar(s));
                     })
                    
                     this.eventObject  = {
                      dataSource:this.scheduledappointmentDataSource, 
                      allowAdding:false, 
                      allowEditing:false,
                      allowDeleting:false,
                      fields: {
                        
                     
                        subject: { name :'nameSurname'},
                        startTime: {name:'startTime'},
                        endTime: {name:'endTime'}, 
                        
                      }, 
                      enableTooltip: true,
                    }
                  

        })
  })
  }






}
