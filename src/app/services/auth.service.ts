import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://ced-user-managemant.azurewebsites.net';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) { }

  create(user:any): Observable<any> {
    return this.http.post(`${baseUrl}/v1/api/user/create`, user);
  }
  
  validUser(loginUser:any): Observable<any> {
    return this.http.post(`${baseUrl}/login`, loginUser);
  }

}
