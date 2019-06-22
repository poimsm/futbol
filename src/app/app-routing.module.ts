import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartidosComponent } from './components/partidos/partidos.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { PartidoContenidoComponent } from './components/partido-contenido/partido-contenido.component';
import { MensajesContenidoComponent } from './components/mensajes-contenido/mensajes-contenido.component';
import { AuthGuard } from './guards/auth.guard';
import { PagarComponent } from './components/pagar/pagar.component';
import { CompraExitosaComponent } from './components/compra-exitosa/compra-exitosa.component';

const routes: Routes = [
  { path: '', redirectTo: 'partidos', pathMatch: 'full' },
  { path: 'partidos', component: PartidosComponent },
  { path: 'partido/:id', component: PartidoContenidoComponent },
  { path: 'mensajes', component: MensajesComponent, canActivate: [AuthGuard] },
  { path: 'mensaje/:id', component: MensajesContenidoComponent, canActivate: [AuthGuard]  },
  { path: 'compra-exitosa', component: CompraExitosaComponent, canActivate: [AuthGuard]  },
  { path: 'pagar', component: PagarComponent, canActivate: [AuthGuard]  },


  { path: '**', component: PartidosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
