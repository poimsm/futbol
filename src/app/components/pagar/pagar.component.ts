import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {

  user: any;
  token: string;
  isAuth: boolean;

  isA = false;
  isB = true;
  isC = false;
  monto = 2500;

  isLoading = false;

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
        this._auth.readFlowOrderStorage(this.token);
      } else {
        this.isAuth = false;
      }
    });
  }

  ngOnInit() {
    this._control.setPageState('pagar');
  }

  toggle(num) {
    this.monto = num;
    if (num == 1500) {
      this.isA = true;
      this.isB = false;
      this.isC = false;
    }
    if (num == 2500) {
      this.isA = false;
      this.isB = true;
      this.isC = false;
    }
    if (num == 5000) {
      this.isA = false;
      this.isB = false;
      this.isC = true;
    }
  }

  close() {
    this.router.navigateByUrl(`partidos`);
  }

  pagarConFlow() {

    this.isLoading = true;

    const transactionPayload: any = {
      ok: false,
      usuario: this.user._id,
      monto: this.monto
    }

    this._data.createTransaction(transactionPayload)
      .then((res: any) => {

        const payloadOrder = {
          id: res._id
        }

        this._auth.saveFlowOrderStorage(payloadOrder);

        const flowPayload = {
          transaccionId: res._id,
          email: '',
          monto: res.monto
        }

        if (this.user.method == 'facebook') {
          flowPayload.email = this.user.facebook.email;
        } else {
          flowPayload.email = this.user.local.email;
        }

        this._data.iniciarCompra(this.token, flowPayload).then((data) => {
          let respuesta = JSON.parse(JSON.stringify(data));

          if (respuesta.code != undefined && respuesta.code == 108) {
            // title: 'Error',
            // subTitle: 'Imposible conectar con el sistema de pagos.'
          } else {

            this.isLoading = false;

            let token = respuesta.token;
            let url = respuesta.url;

            window.open(url + '?token=' + token, "_blank");
          }

        });
      });
  }

}
