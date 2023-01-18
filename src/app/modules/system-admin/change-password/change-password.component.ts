import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
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
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public user: SystemAdministrator = new SystemAdministrator();
  
  genders = [
    { value: Gender.Male, viewValue: "Male" },
    { value: Gender.Female, viewValue: "Female"}
  ]

  public password: string = '';

  public confirmationPass: string = '';

  isGenderSelected: boolean = false;

  constructor(private userService: UserService,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userService.findSystemAdministrator(this.userService.currentUser.id).subscribe(res => {
        this.user = res;
      })
    });
    
  }

  public changePassword() {
    if (this.isInputValid()) {
      if (this.isPassConfirmed()) {
        this.setSystemAdministrator();
        this.userService.saveSystemAdministrator(this.user).subscribe(res => {
          alert("You have changed password  successfully!");
        })
    } else {
      alert("Password is not confirmed!");
      this.confirmationPass = ''
    }
    }
  }

  requiredPasswordControl = new FormControl('', [
    Validators.required,
  ]);

  requiredConfirmationPasswordControl = new FormControl('', [
    Validators.required,
  ])

  matcher = new MyErrorStateMatcher();

  private isInputValid(): boolean {
    return this.user.password != ''
         && this.confirmationPass != '';
  }

  private isPassConfirmed(): boolean {
    return this.password === this.confirmationPass;
  }
  
  private setSystemAdministrator(): void{
    this.user.isFirstLogin = false
    this.user.password = this.password;  
 }

}
