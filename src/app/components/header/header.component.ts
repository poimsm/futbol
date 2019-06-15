import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('contenedor') contenedor: ElementRef;


  activoA = true;
  activoB = false;
  activoC = false;

  addApp = false;
  navbar = false;


  constructor(
    private router: Router,
    public _control: ControlService
  ) {

    let self = this;
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

  activarBloque(letra) {
    if (letra == 'A') {
      this.activoA = true;
      this.activoB = false;
      this.activoC = false;
    }

    if (letra == 'B') {
      this.activoA = false;
      this.activoB = true;
      this.activoC = false;
    }

    if (letra == 'C') {
      this.activoA = false;
      this.activoB = false;
      this.activoC = true;
    }
  }

  openHome() {
    this.router.navigateByUrl('/home');
    this._control.isHome = true;
  }

  ngOnInit() {
  }

}
