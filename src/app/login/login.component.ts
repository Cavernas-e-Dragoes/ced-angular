import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any;
  password:any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  validUser(): void {
    const loginUser = {
      login:this.login,
      password:this.password
    };
    console.log(loginUser);

    this.authService.validUser(loginUser)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });

  }
}
