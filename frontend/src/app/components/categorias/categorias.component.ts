import { Component, OnInit } from '@angular/core';

import { CategoriasService } from "../../services/categorias.service";
import { FormBuilder , FormGroup } from "@angular/forms";
import { ICategoria } from "src/app/models/categoria";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  listCategoria = [];

  formCategoria: FormGroup;

  constructor( private categoriaServ: CategoriasService, private fb: FormBuilder ) { 

    this.formCategoria = this.fb.group({
      id_categoria:[''],
      descripcion:[''],
      estado:['']


    })

   }

  ngOnInit(): void {
    this.obtenerCategoria();
  }

  obtenerCategoria(){
    this.categoriaServ.getCategoria().subscribe(

        resultado => this.listCategoria = resultado,
        error => console.log(error)
         
    )
  }

  guardarCategoria(){
    // console.log(this.formProvincia.value);
    if (this.formCategoria.value.id_categoria){

         // si existe el id se actualiza
     this.categoriaServ.updateCategoria(this.formCategoria.value).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerCategoria();
        this.formCategoria.reset();
      },
      error => console.log(error)
  )
    }else{
    
    this.categoriaServ.saveCategoria(this.formCategoria.value).subscribe(
      resultado => {
        console.log(resultado);
        this.obtenerCategoria();//se refresca la grilla
        this.formCategoria.reset();
      },
      error => console.log(error)

    )
  }

  }

  editarCategoria(categoria:ICategoria){
    this.formCategoria.setValue({
      id_categoria:categoria.id_categoria,
      descripcion:categoria.descripcion,

    });
    
     }

     eliminarCategoria(id:number){

      if(confirm('¿Esta seguro que desea eliminar?')){
  
        this.categoriaServ.deleteCategoria(id).subscribe(
          respuesta =>{
            console.log(respuesta);
            this.obtenerCategoria();
    
          },
          error => console.log(error)
          
        )
      }
  
  
      
    }

  



     resetearformCategoria(){
      this.formCategoria.reset();
    }


}
