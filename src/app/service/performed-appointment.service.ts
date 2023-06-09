import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerformedAppointmentService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  hasDonatedBloodInLastSixMonths(registeredUserId: any): Observable<any>{
    return this.http.get<any>(this.apiHost + "performedAppointment/hasDonatedBloodInLastSixMonths/" +  registeredUserId, { headers : this.headers});
  }
}
