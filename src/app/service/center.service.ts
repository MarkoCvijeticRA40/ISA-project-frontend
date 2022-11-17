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

  searchCenters(searchByName: string, searchByPlace: string): Observable<Center[]> {
    return this.http.get<Center[]>(this.apiHost + 'centers/search?searchByName=' + searchByName + '&searchByPlace=' + searchByPlace, {headers: this.headers});
  }

  filterCenters(searchByName: string, searchByPlace: string, gradeFrom: number = 0, gradeTo: number = 0): Observable<Center[]> {
    return this.http.get<Center[]>(this.apiHost + 'centers/filter?searchByName=' + searchByName + '&searchByPlace=' + searchByPlace + '&gradeFrom=' + gradeFrom + '&gradeTo=' + gradeTo, {headers: this.headers});
  }
}
