import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

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
import { LoginComponent } from './components/login/login.component';
import { EvaluarComponent } from './components/evaluar/evaluar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { MensajesContenidoComponent } from './components/mensajes-contenido/mensajes-contenido.component';
import { PartidoContenidoComponent } from './components/partido-contenido/partido-contenido.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PagarComponent } from './components/pagar/pagar.component';
import { CompraExitosaComponent } from './components/compra-exitosa/compra-exitosa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    EvaluarComponent,
    SidenavComponent,
    PartidosComponent,
    MensajesComponent,
    MensajesContenidoComponent,
    PartidoContenidoComponent,
    PagarComponent,
    CompraExitosaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZvuoAhFyg8inHOu50KNGTIrj6JIvUAzw'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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
