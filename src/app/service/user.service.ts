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
    return this.http.get<any>(this.apiHost + "registeredusers/" + email, { headers : this.headers});
  }

  findAdministrator(email: string): Observable<any>{
    return this.http.get<any>(this.apiHost + "medicalstaff/" + email, { headers : this.headers});
  }

  save(user: any): Observable<any>{
    return this.http.put<any>(this.apiHost + 'registeredusers/saveChanges' , user , { headers : this.headers });          
  }

  //koliko sam shvatio iz specifikacije administrator centra spada u medical staff,ima odradjeno i za system adminsitratora ako je to mozda
  saveAdministrator(user: any): Observable<any>{
    return this.http.put<any>(this.apiHost + 'medicalstaff/saveChanges' , user , { headers : this.headers });          
  }
}
