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

  getCenterByMedicalStaffId(id: number): Observable<Center> {
    return this.http.get<Center>(this.apiHost + 'centers/medical-staff/' + id, {headers: this.headers});
  }

  updateCenter(center: Center): Observable<any> {
    return this.http.put<any>(this.apiHost + 'centers/update-center/' + center.id, center, {headers: this.headers});
  }

  registerCenter(center:Center): Observable<any>{
    return this.http.post<any>(this.apiHost + 'centers/registerCenter', center, {headers: this.headers})
  }

  getCentersSortedByNameAsc(): Observable<Center[]> {
    return this.http.get<Center[]>(this.apiHost + 'centers/name/asc', {headers: this.headers});
  }

  getCentersSortedByNameDesc(): Observable<Center[]> {
    return this.http.get<Center[]>(this.apiHost + 'centers/name/desc', {headers: this.headers});
  }

  getCentersSortedByAvgGradeAsc(): Observable<Center[]> {
    return this.http.get<Center[]>(this.apiHost + 'centers/grade/asc', {headers: this.headers});
  }

  getCentersSortedByAvgGradeDesc(): Observable<Center[]> {
    return this.http.get<Center[]>(this.apiHost + 'centers/grade/desc', {headers: this.headers});
  }

  getAvailableCenters(dateString : String, ascOrDesc : String) : Observable<Center[]> {
    return this.http.get<Center[]>(this.apiHost + 'centers/available/' + dateString + '/' + ascOrDesc , { headers : this.headers});
  }

  sortListCenterByAvgGradeAsc(centers : Center[]): Observable<Center[]> {
    return this.http.get<Center[]>(this.apiHost + 'centers/grade/list/center/asc/' + centers, {headers: this.headers});
  }

  sortListCenterByAvgGradeDesc(centers : Center[]): Observable<Center[]> {
    return this.http.get<Center[]>(this.apiHost + 'centers/grade/list/center/desc/' + centers, {headers: this.headers});
  }

}
