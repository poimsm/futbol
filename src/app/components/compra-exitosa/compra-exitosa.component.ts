import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-exitosa',
  templateUrl: './compra-exitosa.component.html',
  styleUrls: ['./compra-exitosa.component.css']
})
export class CompraExitosaComponent implements OnInit {

  user: any;
  token: string;
  isAuth: boolean;

  constructor(
    private _data: DataService,
    private _auth: AuthService,
    private _control: ControlService,
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
    this._control.setPageState('compra-exitosa');
  }

}
