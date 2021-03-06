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
    unProducto.fecha_carga=unProducto.fecha_carga.year+'-'+unProducto.fecha_carga.month+'-'+unProducto.fecha_carga.day;
    return this.http.post('http://localhost:3000/producto',unProducto);
  }

  updateProducto(unProducto:IProducto)
  {
    let id:number = unProducto.id_producto;
    unProducto.fecha_carga=unProducto.fecha_carga.year+'-'+unProducto.fecha_carga.month+'-'+unProducto.fecha_carga.day;
    return this.http.put('http://localhost:3000/producto/'+id,unProducto);
  }

  deleteProducto(id:number)
  {
    return this.http.delete('http://localhost:3000/producto/'+id);
  }

}
