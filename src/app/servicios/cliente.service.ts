import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { ResponseCliente } from '../models/ResponseCliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private UrlClient:string;
  httpHeader:HttpHeaders

  constructor(private http: HttpClient) {
    this.UrlClient="http://localhost:8080/cliente/";
    this.httpHeader=new HttpHeaders({'Content-Type':'application/json'});
   }

   getCliente(id:string):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.UrlClient+"findOne"}/${id}`);
   }

   getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.UrlClient+"listar");
   }

   createCliente(cliente:Cliente):Observable<ResponseCliente>{
      return this.http.post<ResponseCliente>(this.UrlClient+"save", cliente, {headers:this.httpHeader});
   }

   updateCliente(cliente:Cliente):Observable<ResponseCliente>{
      return this.http.put<ResponseCliente>(`${this.UrlClient+"save"}/${cliente.id}`, cliente, {headers:this.httpHeader});
   }

   delete(id:number):Observable<ResponseCliente>{
      return this.http.delete<ResponseCliente>(`${this.UrlClient+"delete"}/${id}`, {headers:this.httpHeader});
   }
}
