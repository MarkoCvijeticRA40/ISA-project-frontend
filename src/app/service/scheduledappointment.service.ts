import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scheduledappointment } from '../model/scheduledappointment.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduledappointmentService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createScheduledAppointment(scheduledappointment:Scheduledappointment): Observable<Scheduledappointment> {
    return this.http.post<Scheduledappointment>(this.apiHost + "scheduledapp/create", scheduledappointment, {headers: this.headers});
  }
}