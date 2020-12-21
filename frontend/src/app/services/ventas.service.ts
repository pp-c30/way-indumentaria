import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IVenta } from "../models/venta";

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http:HttpClient) {

  }

  getVentas()
  {
     return this.http.get<IVenta[]>('http://localhost:3000/ventas');
  }

  saveVenta(unaVenta:IVenta)
  {
    unaVenta.fecha_venta=unaVenta.fecha_venta.year+'-'+unaVenta.fecha_venta.month+'-'+unaVenta.fecha_venta.day;
    return this.http.post('http://localhost:3000/ventas',unaVenta);
  }

  updateVenta(unaVenta:IVenta){

    let id:number = unaVenta.id_venta;
    unaVenta.fecha_venta=unaVenta.fecha_venta.year+'-'+unaVenta.fecha_venta.month+'-'+unaVenta.fecha_venta.day;
    return this.http.put('http://localhost:3000/ventas/'+id,unaVenta);


   }

   deleteVenta(id:number){

    return this.http.delete('http://localhost:3000/ventas/' +id);
   }


}
