import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin":'http://localhost:4200/login' });

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/registerUser', user, {headers: this.headers});
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'login', data, {headers: this.headers});
  }
}
