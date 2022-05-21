import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged: boolean;


  constructor() { }

  ngOnInit(): void {  
    this.islogged();  
  }
  
  islogged():void{     
    if(sessionStorage.getItem("logged") == "on"){
      this.logged=true;
    } else {
      this.logged=false;
    }
  }

}
