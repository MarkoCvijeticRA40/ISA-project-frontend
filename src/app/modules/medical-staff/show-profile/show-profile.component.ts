import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalStaff } from 'src/app/model/medical-staff.model';
import { MedicalstaffService } from 'src/app/service/medicalstaff.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  public medicalStaff: MedicalStaff = new MedicalStaff();
  
  constructor(private service: MedicalstaffService,private router : Router,private userService: UserService) { }

  public ChangePage(){
    this.router.navigate(['medical-staff/edit/admin/profile']);
  }

  ngOnInit(): void {
    this.service.find(this.userService.currentUser.email).subscribe(res => {
      this.medicalStaff = res;
    })
  }

}
