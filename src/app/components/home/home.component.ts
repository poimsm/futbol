import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts2 = [
    {
      participantes: '4/10',
      hora: '16:40 - 17:40 | 20 de Mayo',
      direccion: 'Simon Bolivar 802',
      precio: '$2.600'
    },
    {
      participantes: '9/10',
      hora: '20:00 - 22 de Mayo',
      direccion: 'Simon Bolivar 802',
      precio: 'Gratis'
    },{
      participantes: '6/10',
      hora: '19:50 - 22 de Mayo',
      direccion: 'Simon Bolivar 802',
      precio: '$2.600'
    }
  ]

  posts = [
    {
      usuario: {
        nombre: 'Daniel',
        tipo: 'Organizador',
        img: {
          url: 'assets/u01.jpg'
        }
      },
      mensaje: 'Nuevo Partido Cabros Sumensee',
      img: 'assets/p01.jpg',
      participantes: '4/10 jugadores',
      distancia: 2.5,
      precio: '$2.500',
      fecha: '15/5',
      hora: '17:00'
    },
    {
      usuario: {
        nombre: 'Ferh Doop',
        tipo: 'Organizador',
        img: {
          url: 'assets/u02.jpg'
        }
      },
      mensaje: 'Hoy partido cancha sur.. go go',
      img: 'assets/p02.jpg',
      participantes: '8/10 jugadores',
      distancia: 1.3,
      precio: 'Gratis',
      fecha: '12/5',
      hora: '20:10'
    },
    {
      usuario: {
        nombre: 'Daniel',
        tipo: 'Organizador',
        img: {
          url: 'assets/u01.jpg'
        }
      },
      mensaje: 'Nuevo Partido Cabros Sumensee',
      img: 'assets/p01.jpg',
      participantes: '4/10 jugadores',
      distancia: 2.5,
      precio: '$2.500',
      fecha: '15/5',
      hora: '17:00'
    },
    {
      usuario: {
        nombre: 'Ferh Doop',
        tipo: 'Organizador',
        img: {
          url: 'assets/u02.jpg'
        }
      },
      mensaje: 'Hoy partido cancha sur.. go go',
      img: 'assets/p02.jpg',
      participantes: '8/10 jugadores',
      distancia: 1.3,
      precio: 'Gratis',
      fecha: '12/5',
      hora: '20:10'
    }
  ];

  showFlecha: boolean;


  constructor(
    private router: Router,
    private _control: ControlService
  ) {

    let self = this;

    window.addEventListener('scroll', function (e) {
      let scrollPosition = window.scrollY;

      if (scrollPosition >= 100) {
        self.showFlecha = true;
      } else {
        self.showFlecha = false;
      }
    });

  }

  openContent() {
    this.router.navigateByUrl('/content');
    this._control.isHome = false;
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
