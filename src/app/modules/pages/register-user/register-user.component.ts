import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Gender } from 'src/app/model/gender.model';
import { RegisteredUser } from 'src/app/model/registered-user.model';
import { UserService } from 'src/app/service/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})


export class RegisterUserComponent implements OnInit {

  public user: RegisteredUser = new RegisteredUser();

  genders = [
    { value: Gender.Male, viewValue: "Male" },
    { value: Gender.Female, viewValue: "Female"}
  ]

  public confirmationPass: string = '';

  isGenderSelected: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    detectChanges();
  }

  public registerUser() {
    if (this.isInputValid()) {
      if (this.isPassConfirmed()) {
        this.user.facilityInfo = this.user.facilityInfo.trim()
        this.userService.registerUser(this.user).subscribe(res => {
          alert("You have registered successfully!");
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

  requiredProfessionControl = new FormControl('', [
    Validators.required,
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
         && this.user.identityNumber.length === 13 && this.user.profession != ''
         && this.confirmationPass != '' && this.isGenderSelected;
  }

  private isPassConfirmed(): boolean {
    return this.user.password === this.confirmationPass;
  }

  selectGender() {
    this.isGenderSelected = true;
  }


}
function detectChanges() {
  throw new Error('Function not implemented.');
}

