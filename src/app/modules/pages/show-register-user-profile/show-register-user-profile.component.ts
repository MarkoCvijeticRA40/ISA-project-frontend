import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredUser } from 'src/app/model/registered-user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-show-register-user-profile',
  templateUrl: './show-register-user-profile.component.html',
  styleUrls: ['./show-register-user-profile.component.css']
})
export class ShowRegisterUserProfileComponent implements OnInit {

  public registerUser: RegisteredUser = new RegisteredUser();
  
  constructor(private service: UserService,private router : Router) { }

  public ChangePage(){
    this.router.navigate(['/edituserprofile']);
  }

  ngOnInit(): void {
    this.service.find("marko@gmail.com").subscribe(res => {
      this.registerUser = res;
    })
  }
}