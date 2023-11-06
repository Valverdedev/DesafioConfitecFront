import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from '../app/Components/Usuarios/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  { path: 'usuarios', component: ListarUsuariosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
