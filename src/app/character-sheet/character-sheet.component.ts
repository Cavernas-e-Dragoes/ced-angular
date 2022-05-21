import { Component, OnInit } from '@angular/core';
import { Character } from '../pages/characters/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  char: Character;

  constructor(private service: CharacterService) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter():void {
    this.service.getCharacter(localStorage.getItem("idChar"))
    .subscribe(
      data => {
        this.char = data;
      },
      error => {
        console.log(error);
      }      
    );
  }

}
