import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/servicios/producto/producto.service';

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
  productos:Producto[];

  filtroValor:string;

  constructor(private productoService:ProductoService){
    this.contador=10;
    this.title='Proyecto 1 Grupo G18';
    this.curso="Programación web";
    this.num_estudiantes=30;
    this.filtroValor="";
    this.productos=[];
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  handleSearch(value:string){
    this.filtroValor=value;
    this.productoService.getProducto(this.filtroValor).subscribe(
      response=>{
        this.productos=response;
        console.log(this.productos);
      }
    )
  }
}
