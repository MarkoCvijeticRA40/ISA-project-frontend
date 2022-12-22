import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Center } from '../model/center.model';
import { RegisteredUser} from '../model/registered-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  private access_token = null;
  currentUser!:any;

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'auth/signupuser', user, {headers: this.headers});
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'auth/login', data, {headers: this.headers})
     .pipe(map((res) => {
      console.log(res);
      console.log('Login success');
      this.access_token = res.accessToken;
      localStorage.setItem("jwt", res.accessToken)
     }));
  }

  getMyInfo() {
    return this.http.get(this.apiHost + 'users/whoami', {headers: this.headers})
      .pipe(map(user => {
        this.currentUser = user;
        console.log('Current user' + this.currentUser.email)
        return user;
      }));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("jwt");
    this.access_token = null;
    //this.router.navigate(['/login']);
  }


  searchRegisteredUsersByNameAndSurname(name:string,surname:string): Observable<RegisteredUser[]> {
    return this.http.get<RegisteredUser[]>(this.apiHost + 'users/search/'+ name + '/' + surname, {headers: this.headers});
  }

  searchRegisteredUsersByName(name:string): Observable<RegisteredUser[]> {
    return this.http.get<RegisteredUser[]>(this.apiHost + 'users/searchName/'+ name , {headers: this.headers});
  }

  searchRegisteredUsersBySurname(surname:string): Observable<RegisteredUser[]> {
    return this.http.get<RegisteredUser[]>(this.apiHost + 'users/searchSurname/' + surname, {headers: this.headers});
  }


  getRegisteredUsers(): Observable<RegisteredUser[]> {
    return this.http.get<RegisteredUser[]>(this.apiHost + 'users/registeredUsers', {headers: this.headers});
  }

  tokenIsPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }

}
