import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  count:any;


  constructor() { }

  ngOnInit(): void {
    this.count = 1;
  }

  fenomeno() :void {
    this.count ++;
  }


}
