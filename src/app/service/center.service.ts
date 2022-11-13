import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Center } from '../model/center.model';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getCenters(): Observable<Center[]> {
    return this.http.get<Center[]>(this.apiHost + 'centers', {headers: this.headers});
  }
}
