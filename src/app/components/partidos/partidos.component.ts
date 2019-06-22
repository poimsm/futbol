import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidos = [];
  isTodo = true;

  isMisPartidos = false;

  user: any;
  token: string;
  isAuth: boolean;

  constructor(
    public _control: ControlService,
    private router: Router,
    private _data: DataService,
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

      this.loadPartidos();
    });
  }

  loadPartidos() {
    if (this.isAuth) {
      this._data.getPartidos().then((partidos: any) => {
        this.construirPartidos(partidos, this.user._id)
      });
    } else {
      this._data.getPartidos().then((partidos: any) => {
        this.construirPartidos(partidos, '')
      });
    }
    this._control.showMenuPartidos = false;
    this._control.textoMenuPartidos = 'Todo';
  }

  loadMisPartidos() {
    if (this.isAuth) {
      this.loadPartidos();
      let misPartidos = [];
      this.partidos.forEach(partido => {
        if (partido.inscrito) {
          misPartidos.push(partido);
        }
      });
      this.partidos = misPartidos;
    } else {
      this._control.showLogin = true;
    }
    this._control.showMenuPartidos = false;
    this._control.textoMenuPartidos = 'Mis partidos';
  }

  construirPartidos(partidos, uid) {
    this.partidos = [];
    partidos.forEach(partido => {
      let inscrito = false;
      partido.camisetaBlanca.forEach(jugador => {
        if (jugador == uid) {
          inscrito = true;
        }
      });
      partido.camisetaNegra.forEach(jugador => {
        if (jugador == uid) {
          inscrito = true;
        }
      });
      this.partidos.push(partido);
      this.partidos[this.partidos.length - 1].inscrito = inscrito;
    });
  }


  ngOnInit() {
    this._control.openPage('partidos', 'page');
  }

  openPartido(id) {
    this._control.openPage('partido', 'modal');
    this.router.navigateByUrl(`partido/${id}`);
  }

}
