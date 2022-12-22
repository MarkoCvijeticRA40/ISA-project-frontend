import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Gender } from 'src/app/model/gender.model';
import { SystemAdministrator } from 'src/app/model/system-administrator.model';

import { UserService } from 'src/app/service/user.service';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-register-system-administrator',
  templateUrl: './register-system-administrator.component.html',
  styleUrls: ['./register-system-administrator.component.css']
})

export class RegisterSystemAdministratorComponent implements OnInit {

  public user: SystemAdministrator = new SystemAdministrator();
  public medicalStaff: SystemAdministrator = new SystemAdministrator();
  

  genders = [
    { value: Gender.Male, viewValue: "Male" },
    { value: Gender.Female, viewValue: "Female"}
  ]

  public confirmationPass: string = '';

  isGenderSelected: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }

  public registerUser() {
    this.setSystemAdministrator();
    if (this.isInputValid()) {
      if (this.isPassConfirmed()) {
        this.userService.registerSystemAdministrator(this.user).subscribe(res => {
    //  this.userService.registerCenterAdministrator(this.user).subscribe(res => {
          alert("You have registered new system administrator successfully!");
        })
    } else {
      alert("Password is not confirmed!");
    }
    }
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  requiredPasswordControl = new FormControl('', [
    Validators.required,
  ]);

  requiredNameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredSurnameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredCityControl = new FormControl('', [
    Validators.required,
  ]);

  requiredStateControl = new FormControl('', [
    Validators.required,
  ]);

  requiredStreetControl = new FormControl('', [
    Validators.required,
  ]);

  requiredNumberControl = new FormControl('', [
    Validators.required,
  ]);

  requiredPhoneControl = new FormControl('', [
    Validators.required,
  ]);

  requiredIDControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{13}')
  ]);


  requiredConfirmationPasswordControl = new FormControl('', [
    Validators.required,
  ])

  matcher = new MyErrorStateMatcher();

  private isInputValid(): boolean {
    return this.user.email != '' && this.user.password != ''
         && this.user.name != '' && this.user.surname != '' 
         && this.user.address.city != '' && this.user.address.state != '' 
         && this.user.address.street != '' && this.user.phoneNum != '' 
         && this.user.identityNumber.length === 13 
         && this.confirmationPass != '';// && this.isGenderSelected;
  }

  private isPassConfirmed(): boolean {
    return this.user.password === this.confirmationPass;
  }

  selectGender() {
    this.isGenderSelected = true;
  }


  
  private setSystemAdministrator(): void{
    this.user.profession = "System admin"
 }


}


