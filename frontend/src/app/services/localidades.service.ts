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
}
