import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CursosComponent,
    ClientesComponent,
    ContadorPadreComponent,
    ContadorHijoComponent,
    ContadorNietoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
