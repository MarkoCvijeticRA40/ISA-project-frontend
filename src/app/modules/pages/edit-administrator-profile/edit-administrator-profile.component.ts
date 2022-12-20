import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisteredUser } from 'src/app/model/registered-user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-administrator-profile',
  templateUrl: './edit-administrator-profile.component.html',
  styleUrls: ['./edit-administrator-profile.component.css']
})
export class EditAdministratorProfileComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) { }

  public user: RegisteredUser = new RegisteredUser();
  
  public saveUser(){
    if (this.isInputValid()) {  
    this.userService.saveAdministrator(this.user).subscribe(res => {
        alert("You have changed successfully!");
          this.router.navigate(['/adminprofile']);
    })
  }
  else{
    alert("You have not entered the data in the correct format!");
  }
  }
  
  ngOnInit(): void {
    this.userService.findAdministrator("milan@gmail.com").subscribe(res => {
      this.user = res;
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
    return this.user.email != '' && this.user.password != ''
         && this.user.name != '' && this.user.surname != '' 
         && this.user.address.city != '' && this.user.address.state != '' 
         && this.user.address.street != '' && this.user.phoneNum != '' && this.user.address.city != '' && this.user.address.number != ''
  }

}