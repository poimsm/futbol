import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { UserComponent } from './components/user/user.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { PartidoContenidoComponent } from './components/partido-contenido/partido-contenido.component';
import { MensajesContenidoComponent } from './components/mensajes-contenido/mensajes-contenido.component';

const routes: Routes = [
  { path: '', redirectTo: 'partidos', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contenido', component: ContenidoComponent },
  { path: 'user', component: UserComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: 'partido', component: PartidoContenidoComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: 'mensaje', component: MensajesContenidoComponent },


  { path: '**', component: PartidosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
