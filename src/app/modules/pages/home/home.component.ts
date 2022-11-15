import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Center } from 'src/app/model/center.model';
import { CenterService } from 'src/app/service/center.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public dataSource = new MatTableDataSource<Center>();
  public displayedColumns = ['name', 'description', 'address', 'workTime', 'averageGrade'];
  public centers: Center[] = [];


  constructor(private centerService: CenterService) { }

  ngOnInit(): void {
    this.centerService.getCenters().subscribe(res => {
      this.centers = res;
      this.setWorkTime();
      this.dataSource.data = this.centers;
    })
  }


  private setWorkTime() {
    for (let center of this.centers) {
      center.workTime.startTime = center.workTime.startTime.split(":")[0] + ':' + center.workTime.startTime.split(":")[1];
      center.workTime.endTime = center.workTime.endTime.split(":")[0] + ':' + center.workTime.endTime.split(":")[1];
    }
  }
}
