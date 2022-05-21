import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../pages/characters/character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  char: Character;

  constructor(
    private route: Router) { }

  ngOnInit(): void {

  }




}
