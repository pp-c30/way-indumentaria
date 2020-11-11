import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IGasto } from "../models/gasto";

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(private http:HttpClient) {

  }

   getGastos()
   {
      return this.http.get<IGasto[]>('http://localhost:3000/gastos');
   }

}
