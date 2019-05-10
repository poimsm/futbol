import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list = [1,2,3,4];

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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
