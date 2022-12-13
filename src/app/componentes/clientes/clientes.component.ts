import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

    cliente1:Cliente;
    cliente2:Cliente;
    habilitar:boolean;

    listclientes:Cliente[];

    constructor(private clienteService:ClienteService){
      this.cliente1=new Cliente(1, 'Jhonnyer', 'Galindez', 'jhonnyerg@gmail.com','2022-12-09','');
      this.cliente2={id:2, nombre:'Fernando',apellido:'Galindez',email:'fernando@gmail.com',createAt:'2022-12-09',foto:''};

      this.listclientes=[];
      // this.listclientes=[
      //   {id:1, nombre:'Fernando',apellido:'Galindez',email:'fernando@gmail.com',createAt:'2022-12-09',foto:''},
      //   {id:2, nombre:'Luis',apellido:'Galindez',email:'fernando@gmail.com',createAt:'2022-12-09',foto:''},
      //   {id:3, nombre:'Angelica',apellido:'Galindez',email:'fernando@gmail.com',createAt:'2022-12-09',foto:''},
      //   {id:4, nombre:'Ana',apellido:'Galindez',email:'fernando@gmail.com',createAt:'2022-12-09',foto:''},
      //   {id:5, nombre:'Martha',apellido:'Galindez',email:'fernando@gmail.com',createAt:'2022-12-09',foto:''},
      //   {id:6, nombre:'Daniel',apellido:'Galindez',email:'fernando@gmail.com',createAt:'2022-12-09',foto:''},
      //   {id:7, nombre:'Jesus',apellido:'Galindez',email:'fernando@gmail.com',createAt:'2022-12-09',foto:''},
      //   {id:8, nombre:'Laura',apellido:'Galindez',email:'fernando@gmail.com',createAt:'2022-12-09',foto:''},
      //   {id:9, nombre:'Luisa',apellido:'Galindez',email:'fernando@gmail.com',createAt:'2022-12-09',foto:''},
      //   {id:10, nombre:'Jose',apellido:'Galindez',email:'fernando@gmail.com',createAt:'2022-12-09',foto:''},
      // ],

      this.habilitar=false;
    }
  ngOnInit() {
    this.clienteService.getClientes().subscribe((clientes)=>{
      this.listclientes=clientes;
      console.log(this.listclientes);
    },err=>{
      console.log("Error: "+err);
    }
    )
  }


    setHabilitar():void{
      this.habilitar= (this.habilitar==true) ? false : true;
  
    }
}
