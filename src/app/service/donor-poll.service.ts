import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorPollService {
  
  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin":'*' });


  constructor(private http: HttpClient) { }

  save(bloodDonorInfo: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'info', bloodDonorInfo, {headers: this.headers});
  }

  isPollFilled(registeredUserId: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'info/isFilled/' + registeredUserId, {headers: this.headers});
  }

}
