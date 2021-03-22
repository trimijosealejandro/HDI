import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{AutenticacionComponent} from './paginas/autenticacion/autenticacion.component';
import{DepartamentosComponent} from './paginas/departamentos/departamentos.component';
import{BienvenidaComponent} from './paginas/bienvenida/bienvenida.component';
import{PcsComponent} from './paginas/pcs/pcs.component';


const routes: Routes = [
  {path:'',component:BienvenidaComponent},
  {path:'autenticacion', component:AutenticacionComponent},
  {path:'departamentos',component:DepartamentosComponent},
  {path:'pcs',component:PcsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
