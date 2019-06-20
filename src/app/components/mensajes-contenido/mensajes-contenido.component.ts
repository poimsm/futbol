import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajes-contenido',
  templateUrl: './mensajes-contenido.component.html',
  styleUrls: ['./mensajes-contenido.component.css']
})
export class MensajesContenidoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  close() {
    this.router.navigateByUrl(`partidos`);
  }

  ngOnInit() {
  }

}
