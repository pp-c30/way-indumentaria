import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ILocalidad } from "../models/localidad";

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  constructor(private http:HttpClient) {

  }

  getLocalidades()
   {
      return this.http.get<ILocalidad[]>('http://localhost:3000/localidades');
   }

   saveLocalidad(unaLocalidad:ILocalidad)
   {
      return this.http.post('http://localhost:3000/localidades',unaLocalidad);
   }

   updateLocalidad(unaLocalidad:ILocalidad)
   {
      let id:number = unaLocalidad.id_localidad;

      return this.http.put('http://localhost:3000/localidades/'+id,unaLocalidad);
   }

   deleteLocalidad(id:number)
   {
      return this.http.delete('http://localhost:3000/localidades/'+id);
   }
}
