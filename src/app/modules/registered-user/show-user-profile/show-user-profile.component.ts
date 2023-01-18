import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredUser } from 'src/app/model/registered-user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-show-user-profile',
  templateUrl: './show-user-profile.component.html',
  styleUrls: ['./show-user-profile.component.css']
})
export class ShowUserProfileComponent implements OnInit {
  public registerUser: RegisteredUser = new RegisteredUser();
  
  constructor(private service: UserService,private router : Router) { }

  public ChangePage(){
    this.router.navigate(['registered-user/edit/user/profile']);
  }

  ngOnInit(): void {
    this.service.find(this.service.currentUser.email).subscribe(res => {
      this.registerUser = res;
    })
  }
}
