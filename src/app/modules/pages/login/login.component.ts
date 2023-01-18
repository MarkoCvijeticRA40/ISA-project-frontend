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
  public currentUser: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public login() {
    this.userService.login(this.data).subscribe(res => {
      console.log(res);
      this.userService.getMyInfo().subscribe(res => {
        this.currentUser = res;
        if (this.currentUser.role.name === 'REGISTERED_USER') {
            this.router.navigate(['/registered-user/user/profile']);
        }
        else if (this.currentUser.role.name === 'SYSTEM_ADMINISTRATOR') {
          this.router.navigate(['/system-admin/registeredUsers']);
        }
        else if (this.currentUser.role.name === 'MEDICAL_STAFF') {
          this.router.navigate(['/medical-staff/admin/profile']);
        }
        
      });
    },
    error => {
      alert("Incorrect username or password.");
    })
      
  }

}
