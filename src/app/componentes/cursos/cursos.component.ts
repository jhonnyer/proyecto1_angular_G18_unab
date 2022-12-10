import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  
  listaCursos:string[];
  habilitar:boolean;

  constructor(){
    this.listaCursos=['Test Unitarios', 'WebFlux', 'Redux', 'Automatización Azure'];
    this.habilitar=true;
  }


  setHabilitar():void{
    this.habilitar= (this.habilitar==true) ? false : true;

  }

  // setHabilitar():void{
  //   if(this.habilitar==true){
  //     this.habilitar=false;
  //   }else{
  //     this.habilitar=true;
  //   }
  // }


}
