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

   saveGasto(unGasto:IGasto)
   {
     return this.http.post('http://localhost:3000/gastos',unGasto);
   }

   updateGasto(unGasto:IGasto){

    let id:number = unGasto.id_gasto;

    return this.http.put('http://localhost:3000/gastos/'+id,unGasto);


   }


   deleteGasto(id:number){

    return this.http.delete('http://localhost:3000/gastos/' +id);
   }
}
