import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-in',
  templateUrl: './header-in.component.html',
  styleUrls: ['./header-in.component.css']
})
export class HeaderInComponent implements OnInit {

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
