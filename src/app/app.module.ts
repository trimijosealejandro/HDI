import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacionComponent } from './paginas/autenticacion/autenticacion.component';
import { DepartamentosComponent } from './paginas/departamentos/departamentos.component';
import { PcsComponent } from './paginas/pcs/pcs.component';
import { ExpedientesComponent } from './paginas/expedientes/expedientes.component';
import { BanerComponent } from './Componentes/baner/baner.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';


@NgModule({
  declarations: [
    AppComponent,
    AutenticacionComponent,
    DepartamentosComponent,
    PcsComponent,
    ExpedientesComponent,
    BanerComponent,
    BienvenidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
