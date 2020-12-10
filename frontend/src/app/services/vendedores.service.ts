import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IVendedor } from "../models/vendedor";

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  constructor( private http:HttpClient ) { }

  getVendedores(){

    return this.http.get<IVendedor[]>('http://localhost:3000/vendedores');


   }

   saveVendedores(unVendedor:IVendedor){

    return this.http.post('http://localhost:3000/vendedores', unVendedor);
    

   }

   updateVendedor(unVendedor:IVendedor){

    let id:number = unVendedor.id_vendedor;

    return this.http.put('http://localhost:3000/vendedores/'+id,unVendedor);


   }


   deleteVendedor(id:number){

    return this.http.delete('http://localhost:3000/vendedores/' +id);
   }

}
