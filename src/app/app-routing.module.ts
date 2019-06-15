import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'content', component: ContentComponent },
  { path: 'contenido', component: ContenidoComponent },
  { path: 'user', component: UserComponent },

  { path: '**', component: UserComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
