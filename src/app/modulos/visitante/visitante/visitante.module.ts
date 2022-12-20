import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitanteRoutingModule } from './visitante-routing.module';
import { HomeVisitanteComponent } from '../componentes/home-visitante/home-visitante.component';
import { NavbarVisitanteComponent } from '../componentes/navbar-visitante/navbar-visitante.component';


@NgModule({
  declarations: [
    HomeVisitanteComponent,
    NavbarVisitanteComponent
  ],
  imports: [
    CommonModule,
    VisitanteRoutingModule
  ],
  exports:[
    HomeVisitanteComponent,
    NavbarVisitanteComponent
  ],
  providers:[]
})
export class VisitanteModule { }
