import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent
} from '@angular/common/http';

import { Observable} from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public userService: UserService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.userService.tokenIsPresent()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userService.getToken()}` 
        }
      });
    }
    return next.handle(request);
  }
}