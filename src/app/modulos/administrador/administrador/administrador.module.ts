import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { HomeAdministradorComponent } from '../../componentes/home-administrador/home-administrador.component';
import { NavbarComponent } from 'src/app/componentes/navbar/navbar.component';


@NgModule({
  declarations: [
    HomeAdministradorComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ], 
  exports:[
    HomeAdministradorComponent,
    AdministradorRoutingModule,
    NavbarComponent
  ],
  providers:[]
})
export class AdministradorModule { }
