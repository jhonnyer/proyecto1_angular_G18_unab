import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from 'src/app/componentes/clientes/clientes.component';
import { CursosComponent } from 'src/app/componentes/cursos/cursos.component';
import { FormComponent } from 'src/app/formularios/clientes/form/form.component';
import { HomeAdministradorComponent } from '../../componentes/home-administrador/home-administrador.component';

const routes: Routes = [
  {path: 'home', component:HomeAdministradorComponent,
    children:[
      {path: 'clientes', component:ClientesComponent, },
      {path: 'clientes/form', component:FormComponent },
      {path: 'clientes/form/:id', component:FormComponent}
    ] 
  },
  {path:'cursos', component:HomeAdministradorComponent,
    children:[
      {path:'info', component:CursosComponent}
    ]
  },
  {path:'**', component:HomeAdministradorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
