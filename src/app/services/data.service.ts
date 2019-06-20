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

  createMensajes(body) {
    const url = `${this.apiURL}/futbol/crear-mensaje`;
    return this.http.post(url, body).toPromise();
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
