import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RegisteredUser} from 'src/app/model/registered-user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  public dataSource = new MatTableDataSource<RegisteredUser>();
  public displayedColumns = ['name', 'surname','email','phoneNum'];
  public registeredUsers: RegisteredUser[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getRegisteredUsers().subscribe(res =>{
      this.registeredUsers = res;
      this.dataSource.data = this.registeredUsers
    })
  }

}
