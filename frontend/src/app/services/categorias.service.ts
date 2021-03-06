import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategoria } from "../models/categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http:HttpClient) { }
  getCategoria(){

    return this.http.get<ICategoria[]>('http://localhost:3000/categoria');
  }

  saveCategoria(unaCategoria:ICategoria){

    return this.http.post('http://localhost:3000/categoria', unaCategoria);
    

   }
   updateCategoria(unaCategoria:ICategoria){

    let id:number = unaCategoria.id_categoria;

    return this.http.put('http://localhost:3000/categoria/'+id,unaCategoria);


   }
   deleteCategoria(id:number){

    return this.http.delete('http://localhost:3000/categoria/' +id);
   }







}
