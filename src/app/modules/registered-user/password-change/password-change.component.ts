import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisteredUser } from 'src/app/model/registered-user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  constructor(private userService : UserService,private router: Router) { }

  public user: RegisteredUser = new RegisteredUser();

  public password: string = '';

  public confirmationPass: string = '';

  ngOnInit(): void {
    this.userService.find(this.userService.currentUser.email).subscribe(res => {
      this.user = res;
    })
  }

  public UpdatePassword() {
    if (this.isInputValid()) {
      if (this.isPassConfirmed()) {
        this.user.password = this.password;
        this.userService.save(this.user).subscribe(res => {
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
    this.router.navigate(['registered-user/edit/user/profile']);
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


