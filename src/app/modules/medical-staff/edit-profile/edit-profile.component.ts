import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalStaff } from 'src/app/model/medical-staff.model';
import { MedicalstaffService } from 'src/app/service/medicalstaff.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private service: MedicalstaffService,private router: Router,private userService : UserService) { }

  public medicalStaff: MedicalStaff = new MedicalStaff();
  
  public save(){
    if (this.isInputValid()) {  
    this.service.save(this.medicalStaff).subscribe(res => {
        alert("You have changed successfully!");
          this.router.navigate(['medical-staff/admin/profile']);
    })
  }
  
  else {
    alert("You have not entered the data in the correct format!");
    }
  }
  
  ngOnInit(): void {
    this.service.find(this.userService.currentUser.email).subscribe(res => {
      this.medicalStaff = res;
    })
  }

  public ChangePassword() {
    this.router.navigate(['medical-staff/change/password']);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  requiredNameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredSurnameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredPhoneControl = new FormControl('', [
    Validators.required,
  ]);

  requiredStreetControl = new FormControl('', [
    Validators.required,
  ]);

  requiredNumberControl = new FormControl('', [
    Validators.required,
  ]);

  private isInputValid(): boolean {
    return this.medicalStaff.email != '' && this.medicalStaff.password != ''
         && this.medicalStaff.name != '' && this.medicalStaff.surname != '' 
         && this.medicalStaff.address.city != '' && this.medicalStaff.address.state != '' 
         && this.medicalStaff.address.street != '' && this.medicalStaff.phoneNum != '' && this.medicalStaff.address.city != '' && this.medicalStaff.address.number != ''
  }

}
