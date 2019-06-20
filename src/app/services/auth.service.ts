import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = 'http://localhost:3000';

  authState = new BehaviorSubject({ isAuth: false, authData: {} });



  constructor(private http: HttpClient) { this.loadStorage(); }


  loginIn(email, password) {
    return new Promise((resolve, reject) => {
      this.signIn(email, password).then((res: any) => {
        if (res.ok) {
          this.saveStorage(res.token, res.user);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  loginInWithFacebook(body) {
    return new Promise((resolve, reject) => {
      this.signInWithFacebook(body).then((res: any) => {
        if (res.ok) {
          this.saveStorage(res.token, res.user);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  loginUp(name, email, password) {
    return new Promise((resolve, reject) => {
      this.signUp(name, email, password).then((res: any) => {
        if (res.ok) {
          this.saveStorage(res.token, res.user);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  saveStorage(token, user) {
    const authData = { user, token };
    localStorage.setItem("authData", JSON.stringify(authData));
    this.authState.next({ isAuth: true, authData });
  }

  loadStorage() {
    if (localStorage.getItem('authData')) {
      const res = localStorage.getItem('authData');

      const authData = { user: JSON.parse(res).user, token: JSON.parse(res).token };
      this.authState.next({ isAuth: true, authData });

    } else {
      const authData = {};
      this.authState.next({ isAuth: false, authData });
    }
  }

  signIn(email, password) {
    const url = `${this.apiURL}/users/signin`;
    const body = { email, password };
    return this.http.post(url, body).toPromise();
  }

  signUp(name, email, password) {
    const url = `${this.apiURL}/users/signup`;
    const body = {
      name,
      email,
      password,
      img: {
        id: '',
        url: 'https://res.cloudinary.com/ddon9fx1n/image/upload/v1561055940/capturas/descarga.jpg'
      }
    };
    return this.http.post(url, body).toPromise();
  }

  signInWithFacebook(body) {
    const url = `${this.apiURL}/users/facebook`;
    return this.http.post(url, body).toPromise();
  }

}
