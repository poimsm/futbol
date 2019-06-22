import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-partido-contenido',
  templateUrl: './partido-contenido.component.html',
  styleUrls: ['./partido-contenido.component.css']
})
export class PartidoContenidoComponent implements OnInit {

  partido: any;
  id: string;
  fecha: string;
  camisetaBlanca = [];
  camisetaNegra = [];
  mensajes = [];
  colorSeleccionado: string;
  isBlanco: boolean;
  isNegro: boolean;
  showBuyNow: boolean;

  user: any;
  token: string;
  isAuth: boolean;

  constructor(
    private _control: ControlService,
    private _data: DataService,
    private route: ActivatedRoute,
    private _auth: AuthService,
    private router: Router
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
    this.id = this.route.snapshot.paramMap.get("id");

    this.loadPartido();

    this._control.openPage('partido', 'modal');
  }

  loadPartido() {
    this._data.getOnePartido(this.id).then((data: any) => {
      this.partido = data;

      this._data.getJugadores({ ids: data.camisetaBlanca })
        .then((jugadores: any) => {
          this.camisetaBlanca = jugadores;
        });
      this._data.getJugadores({ ids: data.camisetaNegra })
        .then((jugadores: any) => {
          this.camisetaNegra = jugadores;
        });
      this._data.getMensajes(data._id).then((mensajes: any) => {
        this.mensajes = mensajes;
      });
    });
  }

  close() {
    this.router.navigateByUrl(`partidos`);
  }

  verificarSiExiste() {
    let existe = false
    let inscritos = this.partido.camisetaBlanca.concat(this.partido.camisetaNegra)
    inscritos.forEach(jugador => {
      if (jugador == this.user._id) {
        existe = true;
      }
    });
    return existe;
  }

  unirse() {

    if (!this.isAuth) {
      this.showBuyNow = false;
      this._control.showLogin = true;
      return;
    }

    if (this.verificarSiExiste()) {
      this.showBuyNow = false;
      return;
    }

    let color = '';

    if (this.isBlanco) {
      color = 'blanco'
    }

    if (this.isNegro) {
      color = 'negro'
    }

    if (color.length == 0) {
      return;
    }

    const payloadGroupal = {
      partido: this.partido._id,
      cancha: this.partido.cancha.nombre,
      usuario: this.user._id,
      fecha: this.partido.fechaGrupal,
      lastMessage: {
        nombre: '',
        mensaje: ''
      },
      img: this.partido.cancha.img
    }

    this._data.createMensajeGrupal(payloadGroupal).then((data: any) => {

      const payloadJoin = {
        color: color,
        userId: this.user._id,
        followerId: data._id
      }

      this._data.joinPartido(this.partido._id, payloadJoin)
        .then(() => {
          this.showBuyNow = false;
          this.loadPartido();
        });
    });
  }


}
