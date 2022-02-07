import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private baseUrl = `${environment.baseAPIUrl}/${environment.api.authorization}`;
  constructor(private http: HttpClient) { }

  userSignIn(user: User): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}/login`, user);
  }

  userSignUp(user: User): Observable<Object> {

    var userReg = {
        registration: user

    }
    return this.http.post<Object>(`${this.baseUrl}/register/user`, userReg);
  }
}
