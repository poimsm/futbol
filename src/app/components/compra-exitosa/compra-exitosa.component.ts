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

  isSuccess: boolean;

  isDone = false;

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
        this._auth.readFlowOrderStorage(this.token);

        // this.checkTransaction().then(() => {
        //   this._auth.readFlowOrderStorage(this.token);
        // });

        if (!this.isDone) {
          // this.verifyTransaction();
        }
      } else {
        this.isSuccess = false;
        this.isAuth = false;
      }
    });
  }

  ngOnInit() {
    this._control.setPageState('compra-exitosa');
  }

  checkTransaction() {
    return new Promise((resolve, reject) => {
      const res = localStorage.getItem('order');
      const order = JSON.parse(res);

      console.log('id', order.id);
      
  
      this._data.getTransaction(order.id).then((data: any) => {
        if (data.ok) {
          this.isSuccess = true;
        } else {
          this.isSuccess = false;
        }
        resolve();
      });
    }); 
  }

  // core(order) {
  //   this._data.getTransaction(order.id).then((data: any) => {
  //     if (data.ok && !data.isUsed) {
  //       this.isSuccess = true;
  //       const payloadWallet = {
  //         id: this.user._id,
  //         monto: data.monto
  //       }
  //       this._data.rechargeWallet(payloadWallet).then(() => {
  //         this._auth.updateStorage(this.token);
  //         this._data.updateTransaction(order.id);
  //       });
  //     } else {
  //       this.isSuccess = false;
  //     }
  //   });
  // }

  // verifyTransaction() {
  //   this.isDone = true;
  //   const order = this._auth.readFlowOrderStorage();
  //   if (order) {

  //     this.core(order);

  //   } else {
  //     setTimeout(() => {

  //       this.core(order);

  //     }, 1000);
  //   }
  // }

}
