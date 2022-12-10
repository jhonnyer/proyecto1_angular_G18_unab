import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string;
  curso:string;
  num_estudiantes:number;

  constructor(){
    this.title='Proyecto 1 Grupo G18';
    this.curso="Programación web";
    this.num_estudiantes=30;
  }

  
}
