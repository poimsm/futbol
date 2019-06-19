import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('contenedor') contenedor: ElementRef;

  addApp = false;
  navbar = false;

  isPartidos = true;
  isMensajes = false;
  showLogin = false;


  user: any;
  token: string;
  isAuth: boolean;

  isLoading = false;

  constructor(
    private router: Router,
    public _control: ControlService,
    private _auth: AuthService
  ) {
    this.moveHeader();
    this._auth.authState.subscribe((data: any) => {

      if (data.isAuth) {
        this.user = data.authData.user;
        this.token = data.authData.token;
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }

    });
    
  }



  moveHeader() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  back() {
    this.router.navigateByUrl('/user');
    this._control.isUser = true;
  }

 

  changeView(text) {
    if (text == 'partidos') {
      this.isPartidos = true;
      this.isMensajes = false;
    }
    if (text == 'mensajes') {
      this.isPartidos = false;
      this.isMensajes = true;
    }
  }

  openHome() {
    this.router.navigateByUrl('/home');
    this._control.isHome = true;
  }

  togglePlaces(page) {
    this.router.navigateByUrl(page);
    this._control.isHome = true;
  }

  openUser() {
    if (this.isAuth) {

    } else {
      this._control.showLogin = true;
    }
  }

  ngOnInit() {
  }

}
