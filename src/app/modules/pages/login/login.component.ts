import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/model/login-data.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public data: LoginData = new LoginData();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public login() {
    this.userService.login(this.data).subscribe(res => {
      console.log(res);
      this.userService.getMyInfo().subscribe(ress => {
        console.log(ress);
        alert("Logged in!");
      });
    },
    error => {
      alert("Incorrect username or password.");
    })
      
  }

}
