import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { AuthService as FB } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = 'http://localhost:3000';
  // apiURL = 'https://joopiterweb.com';


  authState = new BehaviorSubject({ isAuth: false, authData: {} });



  constructor(
    private http: HttpClient,
    private authService: FB
  ) { this.loadStorage(); }


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

  logout(user) {
    if (user.method == 'facebook') {
      this.signOutFacebook();
      this.removeStorage();
    } else {
      this.removeStorage();
    }
    const authData = {};
    this.authState.next({ isAuth: false, authData });
  }

  updateUser(token, body, id) {
    return new Promise((resolve, reject) => {
      const url = `${this.apiURL}/users/actualizar/${id}`;
      this.http.post(url, body).toPromise()
        .then(() => {
          this.updateStorage(token)
            .then(() => resolve());
        });
    });
  }

  saveFlowOrderStorage(order) {
    localStorage.setItem("order", JSON.stringify(order));
  }

  readFlowOrderStorage() {
    const res = localStorage.getItem('order');
    const order = JSON.parse(res).order;
    return order
  }

  removeStorage() {
    localStorage.removeItem("authData");
  }

  saveStorage(token, user) {
    const authData = { user, token };
    localStorage.setItem("authData", JSON.stringify(authData));
    this.authState.next({ isAuth: true, authData });
  }

  updateStorage(token) {
    return new Promise((resolve, reject) => {
      this.getUser(token)
        .then((resUser: any) => {
          this.saveStorage(token, resUser.user);
          resolve();
        });
    });
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

  getUser(token) {
    const url = `${this.apiURL}/users/me`;
    const headers = new HttpHeaders({
      Authorization: `JWT ${token}`
    });
    return this.http.get(url, { headers }).toPromise();
  }

  signInWithFacebook(body) {
    const url = `${this.apiURL}/users/facebook`;
    return this.http.post(url, body).toPromise();
  }

  signOutFacebook(): void {
    this.authService.signOut();
  }

}
