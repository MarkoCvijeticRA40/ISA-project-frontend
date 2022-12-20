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
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin":'http://localhost:4200/login' });

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/registeredUser', user, {headers: this.headers});
  }

  find(email: string): Observable<any>{
    return this.http.get<any>(this.apiHost + "registeredusers/" + email, { headers : this.headers});
  }

  findAdministrator(email: string): Observable<any>{
    return this.http.get<any>(this.apiHost + "medicalstaff/" + email, { headers : this.headers});
  }

  save(user: any): Observable<any>{
    return this.http.put<any>(this.apiHost + 'registeredusers/saveChanges' , user , { headers : this.headers });          
  }
  
  saveAdministrator(user: any): Observable<any>{
    return this.http.put<any>(this.apiHost + 'medicalstaff/saveChanges' , user , { headers : this.headers });          
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'login', data, {headers: this.headers});
  }
  searchRegisteredUsersByNameAndSurname(name:string,surname:string): Observable<RegisteredUser[]> {
    return this.http.get<RegisteredUser[]>(this.apiHost + 'users/search/'+ name + '/' + surname, {headers: this.headers});
  }

  searchRegisteredUsersByName(name:string): Observable<RegisteredUser[]> {
    return this.http.get<RegisteredUser[]>(this.apiHost + 'users/searchName/'+ name , {headers: this.headers});
  }

  searchRegisteredUsersBySurname(surname:string): Observable<RegisteredUser[]> {
    return this.http.get<RegisteredUser[]>(this.apiHost + 'users/searchSurname/' + surname, {headers: this.headers});
  }
  
  getRegisteredUsers(): Observable<RegisteredUser[]> {
    return this.http.get<RegisteredUser[]>(this.apiHost + 'users/registeredUsers', {headers: this.headers});
  }

}
