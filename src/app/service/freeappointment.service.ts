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
}
