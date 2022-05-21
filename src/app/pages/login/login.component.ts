import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
//import { SocialAuthService } from "@abacritt/angularx-social-login";
//import { FacebookLoginProvider, GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any;
  password:any;

  constructor(
    private authService: AuthService,
    //private socialAuthService: SocialAuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  catchJWT(): void {
    const loginUser = {
      login:this.login,
      password:this.password
    };
    this.authService.validUser(loginUser)
    .subscribe(
      response => {
        sessionStorage.setItem("logged", "on");
        sessionStorage.setItem("token", response);
        this.session(response);
      },
      error => {
        console.log(error);
      }
      );
  }

  session(token: string):void {
    this.authService.login(token)
    .subscribe(
      response => {
        sessionStorage.setItem("name", response.name);
        sessionStorage.setItem("email", response.email);
        sessionStorage.setItem("login", response.login);
        this.route.navigateByUrl('/characters'); 
      },
      error => {
        console.log(error);
      }
    );
  }

 /*  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  } */
}
