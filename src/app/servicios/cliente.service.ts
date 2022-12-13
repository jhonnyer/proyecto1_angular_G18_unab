import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private UrlClient:string;

  constructor(private http: HttpClient) {
    this.UrlClient="http://localhost:8080/cliente/";
   }

   getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.UrlClient+"listar");
   }
}
