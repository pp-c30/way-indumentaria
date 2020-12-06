import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IProducto } from "../models/producto";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) {

  }
  getProductos()
  {
     return this.http.get<IProducto[]>('http://localhost:3000/productos');
  }

  saveProducto(unProducto:IProducto)
  {
    return this.http.post('http://localhost:3000/productos',unProducto);
  }

}
