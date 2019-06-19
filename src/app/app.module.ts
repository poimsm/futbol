import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("622714634892344")
  }
]);

export function provideConfig() {
  return config;
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { EvaluarComponent } from './components/evaluar/evaluar.component';
import { JuegoPublicoComponent } from './components/juego-publico/juego-publico.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ComprasComponent } from './components/compras/compras.component';
import { MisEventosComponent } from './components/mis-eventos/mis-eventos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { MensajesContenidoComponent } from './components/mensajes-contenido/mensajes-contenido.component';
import { PartidoContenidoComponent } from './components/partido-contenido/partido-contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    EvaluarComponent,
    JuegoPublicoComponent,
    SidenavComponent,
    ContenidoComponent,
    ComprasComponent,
    MisEventosComponent,
    InicioComponent,
    PartidosComponent,
    MensajesComponent,
    MensajesContenidoComponent,
    PartidoContenidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
