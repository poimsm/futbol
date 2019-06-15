import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { RecintosComponent } from './components/recintos/recintos.component';
import { EvaluarComponent } from './components/evaluar/evaluar.component';
import { JuegoPublicoComponent } from './components/juego-publico/juego-publico.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { Home2Component } from './components/home2/home2.component';
import { ComprasComponent } from './components/compras/compras.component';
import { MisEventosComponent } from './components/mis-eventos/mis-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    UserComponent,
    LoginComponent,
    ContentComponent,
    RecintosComponent,
    EvaluarComponent,
    JuegoPublicoComponent,
    SidenavComponent,
    ContenidoComponent,
    Home2Component,
    ComprasComponent,
    MisEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
