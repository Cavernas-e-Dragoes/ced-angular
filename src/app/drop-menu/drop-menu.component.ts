import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.css']
})
export class DropMenuComponent implements OnInit {
  faGear = faGear;
  faDoorOpen = faDoorOpen;
  constructor(private route: Router,
              private auth: AuthService) { }

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
 

  logOut() {
    this.auth.logOut();
  }
}
