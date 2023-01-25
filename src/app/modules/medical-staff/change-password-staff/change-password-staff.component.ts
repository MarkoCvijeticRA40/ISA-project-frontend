import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalStaff } from 'src/app/model/medical-staff.model';
import { MedicalstaffService } from 'src/app/service/medicalstaff.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-change-password-staff',
  templateUrl: './change-password-staff.component.html',
  styleUrls: ['./change-password-staff.component.css']
})
export class ChangePasswordStaffComponent implements OnInit {

  constructor(private userService : UserService,private router: Router,private medicalStaffService : MedicalstaffService) { }

  public user: MedicalStaff = new MedicalStaff();

  public password: string = '';

  public confirmationPass: string = '';

  ngOnInit(): void {
    this.medicalStaffService.find(this.userService.currentUser.email).subscribe(res => {
      this.user = res;
    })
  }

  public UpdatePassword() {
    if (this.isInputValid()) {
      if (this.isPassConfirmed()) {
        this.user.password = this.password;
        this.medicalStaffService.save(this.user).subscribe(res => {
          alert("You have changed password successfully!");
            this.GoBack();
        }) 
      } 
      else {
        alert("Passwords are different!");
        this.confirmationPass = '';
        this.password = '';
      }
    }
    else {
      alert("Input is not in valid format!");
      this.confirmationPass = '';
      this.password = '';
      }
  }

  public GoBack() {
    this.router.navigate(['medical-staff/edit/admin/profile']);
  }

  private isInputValid(): boolean {
    return this.password != ''
         && this.confirmationPass != '';
  }

  private isPassConfirmed(): boolean {
    return this.password === this.confirmationPass;
  }
  
  requiredPasswordControl = new FormControl('', [
    Validators.required,
  ]);

  requiredConfirmationPasswordControl = new FormControl('', [
    Validators.required,
  ])


}  
