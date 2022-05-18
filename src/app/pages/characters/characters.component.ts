import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from './character';
import { CharClass } from './charClass';
import { Race } from './race';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  char: Character[];
  CharCLass : CharClass;
  Race : Race;


  constructor(private service: CharacterService) { 
    this.char = [] 
  }

  ngOnInit() {
   this.showCharacters();
  }

  private showCharacters(): void {

    this.service.list(this.takeToken())
    .subscribe(
      data => { 
        this.char = data;
      },
      error => {
        console.log(error);
      });

  }

  private takeToken(): string {
    var token = localStorage.getItem("token");

    if (token== null) {
      return "login não encontrado.";
    } else {
      console.log(token)
      return token;
    }
  }

 

  







}
