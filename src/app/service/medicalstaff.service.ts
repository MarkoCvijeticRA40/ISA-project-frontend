import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalstaffService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  find(email: string): Observable<any>{
    return this.http.get<any>(this.apiHost + "medicalstaff/" + email, { headers : this.headers});
  }

  save(medicalStaff: any): Observable<any>{
    return this.http.put<any>(this.apiHost + 'medicalstaff/saveChanges' , medicalStaff , { headers : this.headers });          
  }

  
  registerCenterAdministrator(staff: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'medicalstaff/registerStaff', staff, {headers: this.headers});
  }
}

