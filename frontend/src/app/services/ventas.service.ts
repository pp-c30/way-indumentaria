import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IVenta } from "../models/venta";
import { IVentaDetalle } from "../models/venta_detalle";

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

  getVentasByVendedor(id_vendedor:number)
  {
     return this.http.get<IVenta[]>('http://localhost:3000/ventas-por-vendedor/'+id_vendedor);
  }

  saveVenta(unaVenta:IVenta)
  {
    unaVenta.fecha_venta=unaVenta.fecha_venta.year+'-'+unaVenta.fecha_venta.month+'-'+unaVenta.fecha_venta.day;
    return this.http.post('http://localhost:3000/ventas',unaVenta);
  }

  saveVentaByLector(unaVenta:IVenta)
  {
    const datos_venta = {
      codigo_producto:unaVenta.producto,
      descuento:null,
      forma_pago:null,
      vendedor:unaVenta.vendedor
    }
    return this.http.post('http://localhost:3000/ventas-lector',datos_venta);
  }

  updateVenta(unaVenta:IVenta){

    let id:number = unaVenta.id_venta;
    unaVenta.fecha_venta=unaVenta.fecha_venta.year+'-'+unaVenta.fecha_venta.month+'-'+unaVenta.fecha_venta.day;
    return this.http.put('http://localhost:3000/ventas/'+id,unaVenta);


   }

  deleteVenta(id:number){

    return this.http.delete('http://localhost:3000/ventas/' +id);
  }


  getImpagas(id_vip:number,estado:number)
  {
    return this.http.get<IVentaDetalle[]>('http://localhost:3000/ventas-impagas/'+id_vip+'/'+estado);
  }

  getPagas(id_vip:number,estado:number)
  {
    return this.http.get<IVentaDetalle[]>('http://localhost:3000/ventas-pagas/'+id_vip+'/'+estado);
  }


  sendPagasImpagas(id_venta_detalle:number,id_producto:number,estado:number)
  {
    return this.http.get('http://localhost:3000/enviar-pagas-impagas/'+id_venta_detalle+'/'+id_producto+'/'+estado);
  }


  sendToImpagaDevoluciones(lista_impagas_devoluciones:any)
  { 
    return this.http.post('http://localhost:3000/enviar-impagas-devoluciones',lista_impagas_devoluciones);
  }

  confirmVenta(id:number,estado:number)
  {
    const datos = {
      estado:estado
    }
    return this.http.put('http://localhost:3000/confirmar-impagas/'+id,datos);
  }


  sendStockVenta(id_venta_detalle:number,id_producto:number,tipo_movimiento:number,vendedor:number)
  {
    return this.http.get('http://localhost:3000/enviar-stock-venta/'+id_venta_detalle+'/'+id_producto+'/'+tipo_movimiento+'/'+vendedor);
  }


  sendStock(id:number)
  {
    return this.http.get('http://localhost:3000/ventas-a-stock/'+id);
  }

}
