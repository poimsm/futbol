import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPartidos() {
    const url = `${this.apiURL}/futbol/partidos`;
    return this.http.get(url).toPromise();
  }

  getMisPartidos() {
    const url = `${this.apiURL}/futbol/mis-partidos`;
    return this.http.get(url).toPromise();
  }

  getMensajes(id) {
    const url = `${this.apiURL}/futbol/mensajes?id=${id}`;
    return this.http.get(url).toPromise();
  }

  buyTicket(body) {
    const url = `${this.apiURL}/futbol/comprar-tikect`;
    return this.http.post(url, body).toPromise();
  }

  cancelTicket(body) {
    const url = `${this.apiURL}/futbol/comprar-tikect`;
    return this.http.post(url, body).toPromise();
  }

  rechargeWallet(body) {
    const url = `${this.apiURL}/futbol/comprar-tikect`;
    return this.http.post(url, body).toPromise();
  }
}
