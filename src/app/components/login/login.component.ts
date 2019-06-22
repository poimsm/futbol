import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { AuthService as FB } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignIn = false;
  isSignUp = true;

  isEmailAndPassword = false;
  isIncorrectPassOrEmail = false;

  name = '';
  email = '';
  password = '';

  isLoading = false;


  constructor(
    public _control: ControlService,
    private _auth: AuthService,
    private authService: FB
  ) { }


  signInWithFB(): void {
    this.isLoading = true;
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then(data => {
        const body = {
          name: data.facebook.name,
          email: data.facebook.email,
          id: data.facebook.id,
          img: data.photoUrl
        };
        this._auth.loginInWithFacebook(body)
          .then(() => {
            this.isLoading = false;
            this._control.showLogin = false;
          });
      });
  }

  signOut(): void {
    this.authService.signOut();
  }

  login() {
    this.isLoading = true;
    if (this.isSignUp) {
      console.log('pasooo')
      if (this.name.length > 3 && this.email.length > 4 && this.password.length > 4) {
        this._auth.loginUp(this.name, this.email, this.password)
          .then(() => {
            this.isLoading = false;
            this._control.showLogin = false;
          });
      } else {
        this.isLoading = false;
      }
    } else {
      this._auth.loginIn(this.email, this.password)
        .then(isOK => {
          if (isOK) {            
            this.isLoading = false;
            this._control.showLogin = false;
            this.isIncorrectPassOrEmail = false;
          } else {
            this.isLoading = false;
            this.isIncorrectPassOrEmail = true;
          }          
        });
    }
  }

  ngOnInit() {
  }

}
