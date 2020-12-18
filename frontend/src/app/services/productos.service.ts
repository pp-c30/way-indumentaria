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
      return this.http.get<IProducto[]>('http://localhost:3000/producto');
   }

  saveProducto(unProducto:IProducto)
  {
    return this.http.post('http://localhost:3000/producto',unProducto);
  }

  updateProducto(unProducto:IProducto)
  {
    let id:number = unProducto.id_producto;

    return this.http.put('http://localhost:3000/producto/'+id,unProducto);
  }

  deleteProducto(id:number)
  {
    return this.http.delete('http://localhost:3000/producto/'+id);
  }

}
