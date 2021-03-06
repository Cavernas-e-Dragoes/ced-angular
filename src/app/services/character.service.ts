import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Character } from '../pages/characters/character';
import { CharacterListTO } from '../pages/characters/characterListTO';


const baseUrl = 'https://characters-sheet.azurewebsites.net';



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
    return this.http.get<CharacterListTO>
    (`${baseUrl}/v1/api/characters/list`, {headers : reqHeader});
  }

  getCharacter(id:string): Observable<Character> {
    return this.http.get<Character>(`${baseUrl}/v1/api/characters/` + id);
  }
  
}
