import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  isA = true;
  isB = false;
  isC = false;
list = [1,2,3]
  constructor(
    private router: Router,
    private _control: ControlService
  ) {

    // let self = this;

    // window.addEventListener('scroll', function (e) {
    //   let scrollPosition = window.scrollY;

    //   if (scrollPosition >= 100) {
    //     self.showFlecha = true;
    //   } else {
    //     self.showFlecha = false;
    //   }
    // });

  }

  change(letra) {
    if (letra == 'A') {
      this.isA = true;
      this.isB = false;
      this.isC = false;
    }
    if (letra == 'B') {
      this.isA = false;
      this.isB = true;
      this.isC = false;
    }
    if (letra == 'C') {
      this.isA = false;
      this.isB = false;
      this.isC = true;
    }
  }

  openContent() {
    this.router.navigateByUrl('/contenido');
    this._control.isUser = false;
  }

  subir() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
  }

}
