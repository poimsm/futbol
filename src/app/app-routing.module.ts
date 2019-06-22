import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { UserComponent } from './components/user/user.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { PartidoContenidoComponent } from './components/partido-contenido/partido-contenido.component';
import { MensajesContenidoComponent } from './components/mensajes-contenido/mensajes-contenido.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'partidos', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contenido', component: ContenidoComponent },
  { path: 'user', component: UserComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: 'partido/:id', component: PartidoContenidoComponent },
  { path: 'mensajes', component: MensajesComponent, canActivate: [AuthGuard] },
  { path: 'mensaje/:id', component: MensajesContenidoComponent, canActivate: [AuthGuard]  },


  { path: '**', component: PartidosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
