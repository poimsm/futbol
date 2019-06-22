import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

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
  id: string;
  mensaje: string;
  isLoading: boolean;
  showMatch = false;
  partidoId: string;

  user: any;
  token: string;
  isAuth: boolean;

  constructor(
    private router: Router,
    private _control: ControlService,
    private _data: DataService,
    private route: ActivatedRoute,
    private _auth: AuthService

  ) {
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

  ngOnInit() {
    this.partidoId = this.route.snapshot.paramMap.get("id");
    this.loadMensajes();
  }

  loadMensajes() {
    this._data.getOnePartido(this.partidoId).then(data => {
      this.partido = data;
      this._data.getMensajes(this.partidoId)
        .then((data: any) => {
          this.construirChat(data, this.user._id);
        });
    });
  }

  construirChat(mensajes, uid) {
    this.mensajes = [];
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

    const payloadMessage = {
      mensaje: this.mensaje,
      partido: this.partido._id,
      usuario: this.user._id
    }    

    this._data.createMensaje(payloadMessage).then(() => {
      this.mensaje = '';
      this.loadMensajes();
      this.isLoading = false;
    });

    this.partido.followers.forEach(id => {
      const payloadGroupal = {
        id: id,
        lastMessage: {
          nombre: this.user.name.split(' ')[0],
          mensaje: this.mensaje,
        }
      }
      this._data.updateMensajesGrupales(payloadGroupal);
    });

  }

}
