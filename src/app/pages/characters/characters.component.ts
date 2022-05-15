import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from './character';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  char: Character[];

  constructor(private service: CharacterService) { 
    this.char = []}

  ngOnInit() {
    this.service.list(this.takeToken())
    .subscribe(data => this.char = data);
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
