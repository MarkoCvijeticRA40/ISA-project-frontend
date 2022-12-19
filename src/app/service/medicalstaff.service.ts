import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Center } from '../model/center.model';

@Injectable({
  providedIn: 'root'
})

export class Medicalstaff {
    
    apiHost: string = 'http://localhost:8080/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    find(email: string): Observable<any>{
        return this.http.get<any>(this.apiHost + "medicalstaff/" + email, { headers : this.headers});
      }





}
