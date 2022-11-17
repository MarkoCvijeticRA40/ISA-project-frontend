import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredUser } from 'src/app/model/registered-user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  public user: RegisteredUser = new RegisteredUser();
  
  constructor(private userService: UserService,private router : Router) { }

  public ChangePage(){
    this.router.navigate(['/editprofile']);
  }

  ngOnInit(): void {
    this.userService.find("marko@gmail.com").subscribe(res => {
      this.user = res;
    })
  }

}
