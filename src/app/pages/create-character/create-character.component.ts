import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})

export class CreateCharacterComponent implements OnInit {
  @Input() name: string;
  @Input() checked: boolean;

  count:any;

  constructor() {   }

  ngOnInit(): void {
    this.count = 1;
  }

  fenomeno() :void {
    this.count ++;
  }

  maxNo = false;
  amt = 0;

  onChange(isChecked: boolean) {
    if (isChecked)
      this.amt++
    else 
      this.amt--
    this.amt === 2 ? this.maxNo = true : this.maxNo = false;
  }

  checkBox = [
    { name: 'Força', checked: false },
    { name: 'Destreza', checked: false },
    { name: 'Constituição', checked: false },
    { name: 'Inteligência', checked: false },
    { name: 'Sabedoria', checked: false },
    { name: 'Carisma', checked: false } 
    ];

    

}
