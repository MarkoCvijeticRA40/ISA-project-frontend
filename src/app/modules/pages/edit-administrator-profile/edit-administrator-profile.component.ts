import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalStaff } from 'src/app/model/medical-staff.model';
import { MedicalstaffService } from 'src/app/service/medicalstaff.service';

@Component({
  selector: 'app-edit-administrator-profile',
  templateUrl: './edit-administrator-profile.component.html',
  styleUrls: ['./edit-administrator-profile.component.css']
})
export class EditAdministratorProfileComponent implements OnInit {

  constructor(private service: MedicalstaffService,private router: Router) { }

  public medicalStaff: MedicalStaff = new MedicalStaff();
  
  public save(){
    if (this.isInputValid()) {  
    this.service.save(this.medicalStaff).subscribe(res => {
        alert("You have changed successfully!");
          this.router.navigate(['/adminprofile']);
    })
  }
  
  else {
    alert("You have not entered the data in the correct format!");
    }
  }
  
  ngOnInit(): void {
    this.service.find("milan@gmail.com").subscribe(res => {
      this.medicalStaff = res;
    })
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
