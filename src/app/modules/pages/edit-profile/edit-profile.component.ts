import { Component, OnInit } from '@angular/core';
import { RegisteredUser } from 'src/app/model/registered-user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  public user: RegisteredUser = new RegisteredUser();
  
  public saveUser(){
      this.userService.save(this.user).subscribe(res => {
        alert("You have changed successfully!");
    })
  }
  
  ngOnInit(): void {
    this.userService.find("marko@gmail.com").subscribe(res => {
      this.user = res;
    })
  }

}
