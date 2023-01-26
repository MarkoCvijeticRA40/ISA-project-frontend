import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Freeapointment } from 'src/app/model/freeapointment.model';
import { DonorPollService } from 'src/app/service/donor-poll.service';
import { FreeappointmentService } from 'src/app/service/freeappointment.service';
import { PerformedAppointmentService } from 'src/app/service/performed-appointment.service';
import { ScheduledappointmentService } from 'src/app/service/scheduledappointment.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-selected-center',
  templateUrl: './selected-center.component.html',
  styleUrls: ['./selected-center.component.css']
})
export class SelectedCenterComponent implements OnInit {
  public centerId: number = 0;
  public freeAppointments: Freeapointment[] = [];
  public dataSource = new MatTableDataSource<Freeapointment>();
  public columnsToDisplay = ['time', 'duration', 'schedule'];
  public isDonorPollFilled: boolean = false;
  public hasDonatedBloodInLastSixMonths: boolean = false;

  constructor(private activatedRoute : ActivatedRoute, private freeAppointmentService: FreeappointmentService, private scheduledAppointmentService: ScheduledappointmentService, private userService: UserService, private router: Router, private donorPollService: DonorPollService, private performedAppointmentService: PerformedAppointmentService) { }

  ngOnInit(): void {
    this.donorPollService.isPollFilled(this.userService.currentUser.id).subscribe(res => {
      this.isDonorPollFilled = res;
      console.log('is poll filled ' + this.isDonorPollFilled);
    this.performedAppointmentService.hasDonatedBloodInLastSixMonths(this.userService.currentUser.id).subscribe(res => {  
      this.hasDonatedBloodInLastSixMonths = res;
      console.log("has donated in last six months: " + this.hasDonatedBloodInLastSixMonths);
    this.activatedRoute.paramMap.subscribe(params=>{   
      this.centerId=Number(params.get('centerId'));
      this.freeAppointmentService.get(this.centerId, this.userService.currentUser.id).subscribe(res => {
        this.freeAppointments = res;
        for (let freeapointment of this.freeAppointments) {
          freeapointment.date = new Date(Number(freeapointment.date.toString().split(',')[0]), Number(freeapointment.date.toString().split(',')[1]) - 1, Number(freeapointment.date.toString().split(',')[2]), Number(freeapointment.date.toString().split(',')[3]), Number(freeapointment.date.toString().split(',')[4]));
        }
        this.dataSource.data = this.freeAppointments;
      })
  })
})
})
  }

  public schedule(freeApointmentId: any) {
    this.scheduledAppointmentService.scheduleAppointment(freeApointmentId, this.userService.currentUser.id).subscribe(res => {
      alert('Appointment is scheduled!');
      this.router.navigate(['/registered-user/centers']);
    })

  }

  public sortByDateAsc() {
    this.freeAppointmentService.getByDateAsc().subscribe(res => {
      this.freeAppointments = res;
      for (let freeapointment of this.freeAppointments) {
        freeapointment.date = new Date(Number(freeapointment.date.toString().split(',')[0]), Number(freeapointment.date.toString().split(',')[1]), Number(freeapointment.date.toString().split(',')[2]), Number(freeapointment.date.toString().split(',')[3]), Number(freeapointment.date.toString().split(',')[4]));
      }
      this.dataSource.data = this.freeAppointments;
    })
  }

  public sortByDateDesc() {
    this.freeAppointmentService.getByDateDesc().subscribe(res => {
      this.freeAppointments = res;
      for (let freeapointment of this.freeAppointments) {
        freeapointment.date = new Date(Number(freeapointment.date.toString().split(',')[0]), Number(freeapointment.date.toString().split(',')[1]), Number(freeapointment.date.toString().split(',')[2]), Number(freeapointment.date.toString().split(',')[3]), Number(freeapointment.date.toString().split(',')[4]));
      }
      this.dataSource.data = this.freeAppointments;
    })
  }

}
