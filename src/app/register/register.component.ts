import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:any;
  email:any;
  login:any;
  password:any;

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    const user = {
      name:this.name,
      email:this.email,
      login:this.login,
      password:this.password
    };
    console.log(user);

    this.authService.create(user).subscribe(
      response => {
        localStorage.setItem("name", response.name);
        this.route.navigateByUrl('/characters');
        console.log(response);
        
      },
      error => {
        console.log(error);
      });

  }

}
