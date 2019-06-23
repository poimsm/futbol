import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'http://localhost:3000';
  // apiURL = 'https://joopiterweb.com';

  constructor(private http: HttpClient) { }

  getPartidos() {
    const url = `${this.apiURL}/futbol/partidos`;
    return this.http.get(url).toPromise();
  }

  getOnePartido(id) {
    const url = `${this.apiURL}/futbol/partido?id=${id}`;
    return this.http.get(url).toPromise();
  }

  getJugadores(ids) {
    const url = `${this.apiURL}/futbol/jugadores`;
    return this.http.post(url, ids).toPromise();
  }

  getMisPartidos(id) {
    const url = `${this.apiURL}/futbol/mis-partidos?id=${id}`;
    return this.http.get(url).toPromise();
  }

  joinPartido(id, body) {
    const url = `${this.apiURL}/futbol/unirse-al-partido?id=${id}`;
    return this.http.post(url, body).toPromise();
  }

  getMensajes(id) {
    const url = `${this.apiURL}/futbol/mensajes?id=${id}`;
    return this.http.get(url).toPromise();
  }

  getMensajesGrupales(id) {
    const url = `${this.apiURL}/futbol/mensajes-grupales?id=${id}`;
    return this.http.get(url).toPromise();
  }

  updateMensajesGrupales(body) {
    const url = `${this.apiURL}/futbol/actualizar-mensajes-grupales`;
    return this.http.put(url, body).toPromise();
  }

  createMensaje(body) {
    const url = `${this.apiURL}/futbol/crear-mensaje`;
    return this.http.post(url, body).toPromise();
  }

  createMensajeGrupal(body) {
    const url = `${this.apiURL}/futbol/crear-mensaje-grupal`;
    return this.http.post(url, body).toPromise();
  }

  rechargeWallet(body) {
    const url = `${this.apiURL}/futbol/recargar-cuenta`;
    return this.http.put(url, body).toPromise();
  }

  createTransaction(body) {
    const url = `${this.apiURL}/transacciones/crear-transaccion`;
    return this.http.post(url, body).toPromise();
  }

  getTransaction(id) {
    const url = `${this.apiURL}/transacciones/one/${id}`;
    return this.http.get(url).toPromise();
  }

  iniciarCompra(token, body) {
    const url = `${this.apiURL}/transacciones/pago-iniciar`;
    const headers = new HttpHeaders({
      Authorization: `JWT ${token}`
    });
    return this.http.post(url, body, { headers }).toPromise();
  }
}
