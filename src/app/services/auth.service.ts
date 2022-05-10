import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'https://ced-user-managemant.azurewebsites.net';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) { }

  create(user:any): Observable<any> {
    return this.http.post(`${baseUrl}/v1/api/user/create`, user);
  }
  
  validUser(loginUser:any): Observable<any> {
    return this.http.post(`${baseUrl}/login`, loginUser, {responseType : 'text'});
  }

  login(token:string ): Observable<any> {

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
    return this.http.get(`${baseUrl}/v1/api/user/userData`, {headers : reqHeader});
  
  }

  

  
}
