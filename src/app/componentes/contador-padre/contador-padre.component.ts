import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-padre',
  templateUrl: './contador-padre.component.html',
  styleUrls: ['./contador-padre.component.css']
})
export class ContadorPadreComponent {
  contador:number;

  title:string;
  curso:string;
  num_estudiantes:number;

  constructor(){
    this.contador=10;
    this.title='Proyecto 1 Grupo G18';
    this.curso="Programación web";
    this.num_estudiantes=30;
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }
}
