import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ContadorPadreComponent } from './componentes/contador-padre/contador-padre.component';
import { ContadorHijoComponent } from './componentes/contador-hijo/contador-hijo.component';
import { ContadorNietoComponent } from './componentes/contador-nieto/contador-nieto.component';

//servicios
import { ClienteService } from './servicios/cliente.service';
import { FormComponent } from './formularios/clientes/form/form.component';

const routes:Routes=[
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component:ContadorPadreComponent},
  {path: 'cursos', component:CursosComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'clientes/form', component:FormComponent},
  {path: 'clientes/form/:id', component:FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CursosComponent,
    ClientesComponent,
    ContadorPadreComponent,
    ContadorHijoComponent,
    ContadorNietoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
