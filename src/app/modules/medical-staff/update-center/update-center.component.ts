import { Component, OnInit } from '@angular/core';
import { Center } from 'src/app/model/center.model';
import { CenterService } from 'src/app/service/center.service';

@Component({
  selector: 'app-update-center',
  templateUrl: './update-center.component.html',
  styleUrls: ['./update-center.component.css']
})
export class UpdateCenterComponent implements OnInit {

  public center: Center = new Center();

  times = [
    {value: '07:00', viewValue: '07:00'},
    {value: '08:00', viewValue: '08:00'},
    {value: '09:00', viewValue: '09:00'},
    {value: '10:00', viewValue: '10:00'},
    {value: '11:00', viewValue: '11:00'},
    {value: '12:00', viewValue: '12:00'},
    {value: '13:00', viewValue: '13:00'},
    {value: '14:00', viewValue: '14:00'},
    {value: '15:00', viewValue: '15:00'},
    {value: '16:00', viewValue: '16:00'},
    {value: '17:00', viewValue: '17:00'},
    {value: '18:00', viewValue: '18:00'},
    {value: '19:00', viewValue: '19:00'}
  ];

  constructor(private centerService: CenterService) { }

  ngOnInit(): void {
    this.centerService.getCenterByMedicalStaffId(1).subscribe(res => {
      this.center = res;
      this.center.workTime.startTime = this.center.workTime.startTime.split(":")[0] + ':' + this.center.workTime.startTime.split(":")[1];
      this.center.workTime.endTime = this.center.workTime.endTime.split(":")[0] + ':' + this.center.workTime.endTime.split(":")[1];
    })
  }

  public updateCenter(){
    if (!this.isValidInput()) return;
    this.centerService.updateCenter(this.center).subscribe(res => {
      if (res) {
        alert('Uspešna izmena!');
      }
    });
  }

  private isValidInput(): boolean {
    return this.center?.name != '' && this.center?.description != '' && this.center?.address.street != '' && this.center?.address.number != '' &&  this.center?.address.city != '' && 
    this.center?.address.state != '' && this.center?.address.longitude.toString() != '' && this.center?.address.latitude.toString() != '' && this.center?.workTime.startTime != '' && this.center?.workTime.endTime != '';
  }

}