import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  showMatch = true;

  user: any;
  token: string;
  isAuth: boolean;

  mensajes = [];

  constructor(
    private router: Router,
    private _control: ControlService,
    private _data: DataService,
    private _auth: AuthService
    ) { 
      this._auth.authState.subscribe((data: any) => {
        if (data.isAuth) {      
          this.user = data.authData.user;
          this.token = data.authData.token;
          this.isAuth = true;          
          this.loadMensajes();
        } else {
          this.isAuth = false;
        }  
      });
    }

  ngOnInit() {
    this._control.openPage('mensajes', 'page');
  }

  loadMensajes() {
    this._data.getMensajesGrupales(this.user._id)
    .then((data: any) => {
      this.mensajes = data;
    });
  } 

  openContent(mensaje) {
    this._control.openPage('mensaje', 'modal');
    this.router.navigateByUrl('mensaje');
    this._control.swapData = mensaje;
  }

}
