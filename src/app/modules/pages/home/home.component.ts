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
  public searchByName: string = '';
  public searchByPlace: string = '';
  public gradeFrom: number | undefined;
  public gradeTo: number | undefined;


  constructor(private centerService: CenterService) { }

  ngOnInit(): void {
    this.centerService.getCenters().subscribe(res => {
      this.centers = res;
      this.setWorkTime();
      this.dataSource.data = this.centers;
    })
  }

  sortByNameAsc() {
    this.centerService.getCentersSortedByNameAsc().subscribe(res => {
      this.centers = res;
      this.setWorkTime();
      this.dataSource.data = this.centers;
    })
  }

  sortByNameDesc() {
    this.centerService.getCentersSortedByNameDesc().subscribe(res => {
      this.centers = res;
      this.setWorkTime();
      this.dataSource.data = this.centers;
    })
  }

  sortByAvgGradeAsc() {
    this.centerService.getCentersSortedByAvgGradeAsc().subscribe(res => {
      this.centers = res;
      this.setWorkTime();
      this.dataSource.data = this.centers;
    })
  }

  sortByAvgGradeDesc() {
    this.centerService.getCentersSortedByAvgGradeDesc().subscribe(res => {
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

  public searchCentersByName(event: any) {
    this.gradeFrom = undefined;
    this.gradeTo = undefined;
    this.searchByName = event.target.value;
    this.centerService.searchCenters(this.searchByName, this.searchByPlace).subscribe(res => {
      this.centers = res;
      this.setWorkTime();
      this.dataSource.data = this.centers;
    })
  }

  public searchCentersByPlace(event: any) {
    this.gradeFrom = undefined;
    this.gradeTo = undefined;
    this.searchByPlace = event.target.value;
    this.centerService.searchCenters(this.searchByName, this.searchByPlace).subscribe(res => {
      console.log(res);
      this.centers = res;
      this.setWorkTime();
      this.dataSource.data = this.centers;
    })
  }

  public filterCentersByGrade(event: any) {
    console.log(typeof this.gradeFrom)
    console.log(typeof this.gradeTo)
    this.validateGrade();
    this.centerService.filterCenters(this.searchByName, this.searchByPlace, this.gradeFrom, this.gradeTo).subscribe(res => {
      this.centers = res;
      this.setWorkTime();
      this.dataSource.data = this.centers;
    })
  }

  private validateGrade() {
    if (typeof this.gradeFrom == 'object' && typeof this.gradeTo == 'object') {
      this.gradeFrom = Number(this.gradeFrom);
      this.gradeTo = Number(this.gradeTo);
      this.gradeFrom = undefined;
      this.gradeTo = undefined;
    } else if (typeof this.gradeFrom == 'object' && typeof this.gradeTo == 'undefined') {
      this.gradeFrom = Number(this.gradeFrom);
      this.gradeTo = Number(this.gradeTo);
      this.gradeFrom = undefined;
      this.gradeTo = undefined;
    } else if (typeof this.gradeFrom == 'undefined' && typeof this.gradeTo == 'object') {
      this.gradeFrom = Number(this.gradeFrom);
      this.gradeTo = Number(this.gradeTo);
      this.gradeFrom = undefined;
      this.gradeTo = undefined;
    } else if (typeof this.gradeFrom == 'object') {
      this.gradeFrom = Number(this.gradeFrom);
      this.gradeTo = Number(this.gradeTo);
      this.gradeFrom = undefined;
    } else if (typeof this.gradeTo == 'object') {
      this.gradeFrom = Number(this.gradeFrom);
      this.gradeTo = Number(this.gradeTo);
      this.gradeTo = undefined;
    }
  }
}
