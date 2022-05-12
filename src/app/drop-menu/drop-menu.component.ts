import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.css']
})
export class DropMenuComponent implements OnInit {

  constructor(private route: Router) { }

  get getName(): any {
    var subName = localStorage.getItem('name');
    if (subName) {
      subName = subName.slice(0, 12);
    } else {
      this.route.navigateByUrl('/characters');
    }
    return subName;
  }

  ngOnInit(): void {
  }

}
