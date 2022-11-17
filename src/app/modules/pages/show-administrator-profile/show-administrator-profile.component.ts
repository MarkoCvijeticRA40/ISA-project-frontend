import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredUser } from 'src/app/model/registered-user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-show-administrator-profile',
  templateUrl: './show-administrator-profile.component.html',
  styleUrls: ['./show-administrator-profile.component.css']
})
export class ShowAdministratorProfileComponent implements OnInit {

  public user: RegisteredUser = new RegisteredUser();
  
  constructor(private userService: UserService,private router : Router) { }

  public ChangePage(){
    this.router.navigate(['/editadminprofile']);
  }

  ngOnInit(): void {
    this.userService.findAdministrator("milan@gmail.com").subscribe(res => {
      this.user = res;
    })
  }

}
