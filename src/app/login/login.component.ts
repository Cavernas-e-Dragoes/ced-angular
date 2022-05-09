import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "@abacritt/angularx-social-login";




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
    private socialAuthService: SocialAuthService
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

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }
}
