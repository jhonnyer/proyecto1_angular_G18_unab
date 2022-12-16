import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private UrlProducto="http://localhost:8080/producto/"
  constructor(private http:HttpClient) { }

  getProducto(name:string):Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.UrlProducto+"getProducto/"}${name}`);
  }
}


