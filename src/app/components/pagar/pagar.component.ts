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

  is2500 = true;
  is5000 = false;
  is7500 = false;


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
    this._control.setPageState('pagar');
  }

  toggle(num) {
    if (num == 2500) {
      this.is2500 = true;
      this.is5000 = false;
      this.is7500 = false;
    }
    if (num == 5000) {
      this.is2500 = false;
      this.is5000 = true;
      this.is7500 = false;
    }
    if (num == 7500) {
      this.is2500 = false;
      this.is5000 = false;
      this.is7500 = true;
    }
  }

  close() {
    this.router.navigateByUrl(`partidos`);
  }

  pagarConFlow() {

    const transactionPayload: any = {
      ok: false,
      usuario: this.user._id,
      monto: 300
    }

    this._data.createTransaction(transactionPayload)
      .then((res: any) => {

        let transactionId = res._id;
        let monto = res.monto;

        const payloadOrder = {
          id: transactionId,
          monto: monto
        }

        this._auth.saveFlowOrderStorage(payloadOrder);

        // const flowPayload = {
        //   email: '',
        //   monto: res.monto
        // }

        // if (res.usuario.method == 'facebook') {
        //   flowPayload.email = res.usuario.facebook.email;
        // } else {
        //   flowPayload.email = res.usuario.local.email;
        // }

         const flowPayload = {
          email: 'poimsm@gmail.com',
          monto: 350
        }


        this._data.iniciarCompra(this.token, flowPayload).then((data) => {
          let respuesta = JSON.parse(JSON.stringify(data));

          if (respuesta.code != undefined && respuesta.code == 108) {
            // title: 'Error',
            // subTitle: 'Imposible conectar con el sistema de pagos.'
          } else {

            console.log('res', respuesta)

            let token = respuesta.token;
            let url = respuesta.url;

            window.open(url + '?token=' + token, "_blank");

            // this._data.getTransaction(transactionId).then((result: any) => {
            //   if (result.ok) {
            //     this._data.recargarCuentaDeUsuario(monto);
            //   }
            // });
          }

        });
      });
  }

}
