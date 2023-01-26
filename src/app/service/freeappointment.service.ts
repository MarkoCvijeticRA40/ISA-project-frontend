import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Freeapointment } from '../model/freeapointment.model';

@Injectable({
  providedIn: 'root'
})
export class FreeappointmentService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createFreeAppointment(freeappointment:Freeapointment): Observable<Freeapointment> {
    return this.http.post<Freeapointment>(this.apiHost + "freeapp/create", freeappointment, {headers: this.headers});
  }

  getByDate(dateString : String): Observable<Freeapointment[]>{
    return this.http.get<Freeapointment[]>(this.apiHost + "freeapp/searchByDate/" + dateString, {headers: this.headers});
  }

  getByCenterid(centerId: number) : Observable<Freeapointment[]> {
    return this.http.get<Freeapointment[]>(this.apiHost + "freeapp/center/" + centerId, {headers: this.headers});
  }

  getByDateAsc() : Observable<Freeapointment[]> {
    return this.http.get<Freeapointment[]>(this.apiHost + "freeapp/getByDateAsc", {headers: this.headers});
  }

  getByDateDesc() : Observable<Freeapointment[]> {
    return this.http.get<Freeapointment[]>(this.apiHost + "freeapp/getByDateDesc", {headers: this.headers});
  }

  get(centerId: number, registeredUserId: number) : Observable<Freeapointment[]> {
    return this.http.get<Freeapointment[]>(this.apiHost + "freeapp/center/" + centerId + "/" + registeredUserId, {headers: this.headers});
  }



}
