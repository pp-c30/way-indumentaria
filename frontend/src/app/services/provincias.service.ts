import { Injectable } from '@angular/core';

  import { HttpClient } from "@angular/common/http";
import { IProvincia } from '../models/Provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
//  instancia para acceder a las herramientas de httpclient ( private http:HttpClient )
  constructor( private http:HttpClient ) {
   }

   getProvincias(){

    return this.http.get<IProvincia[]>('http://localhost:3000/provincias');

   }

   saveProvincias(unaProvincia:IProvincia){

    return this.http.post('http://localhost:3000/provincias', unaProvincia);
    

   }

   updateProvincia(unaProvincia:IProvincia){

    let id:number = unaProvincia.id_provincia;

    return this.http.put('http://localhost:3000/provincias/'+id,unaProvincia);


   }

   deleteProvincia(id:number){

    return this.http.delete('http://localhost:3000/provincias/' +id);
   }
}
