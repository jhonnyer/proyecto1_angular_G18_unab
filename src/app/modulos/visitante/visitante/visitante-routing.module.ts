import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorPadreComponent } from 'src/app/componentes/contador-padre/contador-padre.component';
import { HomeVisitanteComponent } from '../componentes/home-visitante/home-visitante.component';

const routes: Routes = [
  {path: 'home', component:HomeVisitanteComponent,
    children:[
      {path:'contador', component:ContadorPadreComponent}
    ]
  },
  {path:'**', component:HomeVisitanteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitanteRoutingModule { }
