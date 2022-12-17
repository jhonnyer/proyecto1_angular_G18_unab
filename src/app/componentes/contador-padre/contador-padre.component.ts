import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/servicios/producto/producto.service';

@Component({
  selector: 'app-contador-padre',
  templateUrl: './contador-padre.component.html',
  styleUrls: ['./contador-padre.component.css']
})
export class ContadorPadreComponent implements OnInit{
  contador:number;

  title:string;
  curso:string;
  num_estudiantes:number;
  productos:Producto[];

  filtroValor:string;

  httpHeaders:HttpHeaders=new HttpHeaders();
  token=sessionStorage.getItem('token');

  formProducto:FormGroup;

  constructor(private productoService:ProductoService, private formBuilder:FormBuilder){
    this.contador=10;
    this.title='Proyecto 1 Grupo G18';
    this.curso="Programación web";
    this.num_estudiantes=30;
    this.filtroValor="";
    this.productos=[];
    this.httpHeaders=this.httpHeaders.append('Authorization','Bearer '+this.token);
    this.formProducto=this.formBuilder.group({
      cliente:['',Validators.required],
      precio:[0, Validators.required]
      });
  }

  ngOnInit(){
    this.productos;
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  handleSearch(value:string){
    this.filtroValor=value;
    this.productoService.getProducto(this.filtroValor, this.httpHeaders).subscribe(
      response=>{
        this.productos=response;
        console.log(this.productos);
      },err=>{
        this.productos=[];
      }
    )
  }

  generarFactura(){
    console.log(this.formProducto.value.cliente);
    console.log(this.formProducto.value.precio);
  }
}
