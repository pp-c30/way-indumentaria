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

}
