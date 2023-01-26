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

  scheduleAppointment(freeApointmentId: any, registeredUserId: any): Observable<Scheduledappointment> {
    return this.http.post<Scheduledappointment>(this.apiHost + "scheduledapp/create/" + freeApointmentId + '/' + registeredUserId ,  {headers: this.headers});
  }

  specificSchedule(dateString : any,registeredUserId : any, centerId : any) {
    return this.http.post<Scheduledappointment>(this.apiHost + "scheduledapp/create/" + dateString + '/' + registeredUserId + '/' + centerId ,  {headers: this.headers});
  }

  getByUserId(id : number){
    return this.http.get<any>(this.apiHost + "scheduleapp/get/by/user/" + id ,{ headers : this.headers});
  }

  getScheduleAppointment(): Observable<Scheduledappointment[]> {
    return this.http.get<Scheduledappointment[]>(this.apiHost + 'scheduledapp', {headers: this.headers});
  }

  getScheduleAppointmentByCenterId(id: number): Observable<Scheduledappointment[]> {
    return this.http.get<Scheduledappointment[]>(this.apiHost + 'scheduledapp/center/'+ id, {headers: this.headers});
  }

  get(registeredUserId: any): Observable<Scheduledappointment[]> {
    return this.http.get<Scheduledappointment[]>(this.apiHost + "scheduledapp/" + registeredUserId ,  {headers: this.headers});
  }

  cancelAppointment(scheduledAppointmentId: any, registeredUserId: any): Observable<Scheduledappointment> {
    return this.http.post<Scheduledappointment>(this.apiHost + "scheduledapp/cancelAppointment/" + scheduledAppointmentId + "/" + registeredUserId ,  {headers: this.headers});
  }

}