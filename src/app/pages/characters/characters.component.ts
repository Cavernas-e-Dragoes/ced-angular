import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any

  constructor(
    private route: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.auth.logOut();
  }

}
