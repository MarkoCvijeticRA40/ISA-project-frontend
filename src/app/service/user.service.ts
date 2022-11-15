import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Center } from '../model/center.model';
import { RegisteredUser} from '../model/registered-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/registerUser', user, {headers: this.headers});
  }


  
  getRegisteredUsers(): Observable<RegisteredUser[]> {
    return this.http.get<RegisteredUser[]>(this.apiHost + 'users/registeredUsers', {headers: this.headers});
  }

}
