import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { ScheduledappointmentService } from 'src/app/service/scheduledappointment.service';
import { FreeappointmentService } from 'src/app/service/freeappointment.service';
import { ScheduldedAppointmentCalendar } from 'src/app/model/schedulded-appointment-calendar.model'
import { CenterService } from 'src/app/service/center.service';
import { UserService } from 'src/app/service/user.service';







@Component({
  selector: 'app-working-calendar',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  templateUrl: './working-calendar.component.html',
  styleUrls: ['./working-calendar.component.css'],
  

})
export class WorkingCalendarComponent implements OnInit {

  public scheduledappointmentDataSource: ScheduldedAppointmentCalendar[] = [];
 
  constructor(private centerService : CenterService,private freeAppointmentService : FreeappointmentService,private scheduledAppointmentService : ScheduledappointmentService,private userService : UserService) { }
  public view : View = 'Month'
  public views: View[] = [ "Week", "Month","Year"]
  public centerId : number =0;
  public eventObject : EventSettingsModel = {
 
    allowAdding:false, 
    allowEditing:false,
    allowDeleting:false
  }
  
  ngOnInit(): void {

    this.centerService.getCenterByMedicalStaffId(this.userService.currentUser.id).subscribe(res =>{
        this.centerId = res.id
        this.scheduledAppointmentService.getScheduleAppointmentByCenterId(res.id).subscribe(res =>{
          res.forEach((s) => {
          s.date = new Date(Number(s.date.toString().split(',')[0]), Number(s.date.toString().split(',')[1]) - 1, Number(s.date.toString().split(',')[2]), Number(s.date.toString().split(',')[3]), Number(s.date.toString().split(',')[4]));
            
            this.scheduledappointmentDataSource.push(new ScheduldedAppointmentCalendar(s.date,s.duration,s.registeredUser.name + " " + s.registeredUser.surname));
          })
                    
          this.freeAppointmentService.getByCenterid(this.centerId).subscribe(res =>{
            
            res.forEach((s) => {
            s.date = new Date(Number(s.date.toString().split(',')[0]), Number(s.date.toString().split(',')[1]) - 1, Number(s.date.toString().split(',')[2]), Number(s.date.toString().split(',')[3]), Number(s.date.toString().split(',')[4]));
            
            this.scheduledappointmentDataSource.push(new ScheduldedAppointmentCalendar(s.date,s.duration,"FREE APPOINTMENT"));  
  
                
            })
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
