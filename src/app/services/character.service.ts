import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Character } from '../pages/characters/character';
import { CharClass } from '../pages/characters/charClass';
import { Race } from '../pages/characters/race';


const baseUrl = 'https://characters-sheet.azurewebsites.net';
const baseUrlClass = 'https://ced-dataloader.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  list(token:string): Observable<any> {
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
   });
   console.log("TEXT")
    return this.http.get
    (`${baseUrl}/v1/api/characters/list`, {headers : reqHeader});
  }

  getClass(id:number): Observable<any> {
    return this.http.get<CharClass>(`${baseUrl}/v1/api/classes/` + id);
  }

  getRace(id:number): Observable<any> {
    return this.http.get<Race>(`${baseUrl}/v1/api/races/` + id);
  }

}
