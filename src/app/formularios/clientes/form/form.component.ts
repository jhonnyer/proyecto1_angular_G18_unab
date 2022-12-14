import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ResponseCliente } from 'src/app/models/ResponseCliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  cliente:Cliente;
  respondeCliente!:ResponseCliente;
  id!:string;

  constructor(private clienteService : ClienteService, private router:Router, private activatedRoute: ActivatedRoute){
    this.cliente=new Cliente(0,"","","","","");
  }
  ngOnInit(){
    this.getCliente();
  }

  create(){
    this.clienteService.createCliente(this.cliente).subscribe(
      response => {
        this.respondeCliente=response
        console.log(this.respondeCliente);
        this.router.navigate(['/clientes']);
        Swal.fire("Nuevo Cliente", response.mensaje, 'success')
      }
    )
  }

  update(){
    this.clienteService.updateCliente(this.cliente).subscribe(
      response => {
        this.respondeCliente=response
        console.log(this.respondeCliente);
        this.router.navigate(['/clientes']);
        Swal.fire("Cliente Actualizado", response.mensaje, 'success')
      }
    )
  }

  getCliente(){
    this.activatedRoute.params.subscribe(
      params=>{
        this.id=params['id']
        if(this.id){
          this.clienteService.getCliente(this.id).subscribe(
            cliente=>{
              this.cliente=cliente;
              console.log(cliente);
            }
          )
        }
      }
    )
  }
}
