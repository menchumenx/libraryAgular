import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  // home com página principal
  {path: '', component:HomePageComponent},
  {path: 'registro', component:FormularioRegistroComponent},
  {path: 'pagRegistro', component:RegistroComponent},
  {path: 'perfil', component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
