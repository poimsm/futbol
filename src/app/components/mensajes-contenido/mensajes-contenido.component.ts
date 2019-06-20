import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { DataService } from 'src/app/services/data.service';
import { iif } from 'rxjs';

@Component({
  selector: 'app-mensajes-contenido',
  templateUrl: './mensajes-contenido.component.html',
  styleUrls: ['./mensajes-contenido.component.css']
})
export class MensajesContenidoComponent implements OnInit {

  mensajeGrupal: any;
  mensajes = [];
  partido: any;
  cancha: any;
  organizador: string;
  userId: string;
  id: string;
  mensaje: string;
  isLoading: boolean;

  constructor(
    private router: Router,
    private _control: ControlService,
    private _data: DataService
  ) {
    this.id = this._control.swapData._id;
    this.partido = this._control.swapData.partido;
    this.userId = this._control.swapData.usuario;
    this.cancha = this._control.swapData.cancha;
    this.organizador = this._control.swapData.organizador;
  }

  ngOnInit() {
    this.loadMensajes();
  }

  loadMensajes() {
    this.mensajes = [];
    this._data.getMensajesChat(this.id)
      .then((data: any) => {
        this.construirChat(data, this.userId);
      });
  }

  construirChat(mensajes, uid) {
    mensajes.forEach(mensaje => {
      if (mensaje.usuario._id == uid) {
        this.mensajes.push({
          nombre: mensaje.usuario.name,
          mensaje: mensaje.mensaje,
          img: mensaje.usuario.img.url,
          isMine: true
        });
      } else {
        this.mensajes.push({
          nombre: mensaje.usuario.name,
          mensaje: mensaje.mensaje,
          img: mensaje.usuario.img.url,
          isMine: false
        });
      }
    });
  }

  close() {
    this.router.navigateByUrl(`mensajes`);
  }

  enviar() {

    this.isLoading = true;

    if (this.mensaje.length == 0) {
      this.isLoading = false;
      return;
    }

    const body = {
      mensaje: this.mensaje,
      mensajeGrupal: this.id,
      partido: this.partido._id,
      usuario: this.userId
    }

    this._data.createMensaje(body)
      .then(() => {
        this.mensaje = '';
        this.loadMensajes();
        this.isLoading = false;
      })

  }


}
