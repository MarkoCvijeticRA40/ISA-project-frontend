import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisteredUser } from '../model/registered-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/registeredUser', user, {headers: this.headers});
  }

  find(email: string): Observable<any>{
    return this.http.get<any>(this.apiHost + "users/" + email, { headers : this.headers});
  }

  saveUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/saveChanges' , {headers: this.headers});
  }
}
