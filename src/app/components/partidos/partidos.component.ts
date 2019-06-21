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

  user: any;
  token: string;
  isAuth: boolean;

  constructor(
    private _control:ControlService,
    private router: Router,
    private _data: DataService,
    private _auth: AuthService
  ) { 
    this._auth.authState.subscribe((data: any) => {

      if (data.isAuth) {      
        this.user = data.authData.user;
        this.token = data.authData.token;
        this.isAuth = true;
        _data.getPartidos().then((partidos: any) => {
          this.construirPartidos(partidos, this.user._id)    
        });
      } else {
        this.isAuth = false;
        _data.getPartidos().then((partidos: any) => {
          this.construirPartidos(partidos, '')    
        });
      }

    });
    // _data.getPartidos().then((partidos: any) => {
    //   this.partidos = partidos;      
    // });
  }

  construirPartidos(partidos, uid) {
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
      console.log('partidos',this.partidos)    
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
