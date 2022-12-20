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

  public searchByName: string = '';
  public searchBySurname: string = '';
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

  public searchRegisteredUsers(event: any) {
    
    if(this.searchByName!=''&& this.searchBySurname!=''){
    this.userService.searchRegisteredUsersByNameAndSurname(this.searchByName,this.searchBySurname).subscribe(res =>{
      this.registeredUsers = res;
      this.dataSource.data = this.registeredUsers
    })
    }else if(this.searchByName!=''&& this.searchBySurname==''){
      this.userService.searchRegisteredUsersByName(this.searchByName).subscribe(res =>{
        this.registeredUsers = res;
        this.dataSource.data = this.registeredUsers
      })
    }else if(this.searchByName==''&& this.searchBySurname!=''){
      this.userService.searchRegisteredUsersBySurname(this.searchBySurname).subscribe(res =>{
        this.registeredUsers = res;
        this.dataSource.data = this.registeredUsers
      })
    }else{
      this.userService.getRegisteredUsers().subscribe(res =>{
        this.registeredUsers = res;
        this.dataSource.data = this.registeredUsers
      })

    }
    
  }

}
