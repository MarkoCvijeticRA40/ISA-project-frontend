import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalStaff } from 'src/app/model/medical-staff.model';
import { MedicalstaffService } from 'src/app/service/medicalstaff.service';

@Component({
  selector: 'app-show-administrator-profile',
  templateUrl: './show-administrator-profile.component.html',
  styleUrls: ['./show-administrator-profile.component.css']
})
export class ShowAdministratorProfileComponent implements OnInit {

  public medicalStaff: MedicalStaff = new MedicalStaff();
  
  constructor(private service: MedicalstaffService,private router : Router) { }

  public ChangePage(){
    this.router.navigate(['/editadminprofile']);
  }

  ngOnInit(): void {
    this.service.find("milan@gmail.com").subscribe(res => {
      this.medicalStaff = res;
    })
  }
}
