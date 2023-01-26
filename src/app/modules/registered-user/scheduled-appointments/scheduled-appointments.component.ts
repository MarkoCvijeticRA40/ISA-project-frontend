import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Scheduledappointment } from 'src/app/model/scheduledappointment.model';
import { ScheduledappointmentService } from 'src/app/service/scheduledappointment.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-scheduled-appointments',
  templateUrl: './scheduled-appointments.component.html',
  styleUrls: ['./scheduled-appointments.component.css']
})
export class ScheduledAppointmentsComponent implements OnInit {
  public scheduledAppointments: Scheduledappointment[] = [];
  public dataSource = new MatTableDataSource<Scheduledappointment>();
  public columnsToDisplay = ['time', 'duration', 'center', 'cancel'];

  constructor(private userService: UserService, private scheduledAppointmentService: ScheduledappointmentService) { }

  ngOnInit(): void {
    this.scheduledAppointmentService.get(this.userService.currentUser.id).subscribe(res => {
      this.scheduledAppointments = res;
      for (let scheduledAppointment of this.scheduledAppointments) {
        console.log(scheduledAppointment.date.toString());
        scheduledAppointment.date = new Date(Number(scheduledAppointment.date.toString().split(',')[0]), Number(scheduledAppointment.date.toString().split(',')[1]) - 1, Number(scheduledAppointment.date.toString().split(',')[2]), Number(scheduledAppointment.date.toString().split(',')[3]), Number(scheduledAppointment.date.toString().split(',')[4]));
      }
      this.dataSource.data = this.scheduledAppointments;
    })
  }

}
