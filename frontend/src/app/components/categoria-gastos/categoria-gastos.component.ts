import { Component, OnInit } from '@angular/core';

import { CategoriaGastosService } from "../../services/categoria-gastos.service"

import { FormBuilder , FormGroup } from "@angular/forms";
import { ICategoria_gasto } from 'src/app/models/categoria_gasto';

@Component({
  selector: 'app-categoria-gastos',
  templateUrl: './categoria-gastos.component.html',
  styleUrls: ['./categoria-gastos.component.css']
})
export class CategoriaGastosComponent implements OnInit {

  listCategoria_gasto = [];

  formCategoria_gasto: FormGroup;

  constructor( private categoria_gastoServ: CategoriaGastosService, private fb: FormBuilder ) { 


    this.formCategoria_gasto = this.fb.group({
      id_categoria_gasto:[''],
      descripcion:['']


    })

   }

  ngOnInit(): void {
    this.obtenerCategoria_gasto();
  }

    obtenerCategoria_gasto(){
      this.categoria_gastoServ.getcatGastos().subscribe(

          resultado => this.listCategoria_gasto = resultado,
          error => console.log(error)
           
      )
    }

    guardarCategoria_gasto(){
      // console.log(this.formProvincia.value);
      if (this.formCategoria_gasto.value.id_categoria_gasto){

           // si existe el id se actualiza
       this.categoria_gastoServ.updateCategoria_gasto(this.formCategoria_gasto.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerCategoria_gasto();
          this.formCategoria_gasto.reset();
        },
        error => console.log(error)
    )
      }else{
      
      this.categoria_gastoServ.saveCategorias_gasto(this.formCategoria_gasto.value).subscribe(
        resultado => {
          console.log(resultado);
          this.obtenerCategoria_gasto();//se refresca la grilla
          this.formCategoria_gasto.reset();
        },
        error => console.log(error)
  
      )
    }
  
    }

    editarCategoria_gasto(categoria_gasto:ICategoria_gasto){
      this.formCategoria_gasto.setValue({
        id_categoria_gasto:categoria_gasto.id_categoria_gasto,
        descripcion:categoria_gasto.descripcion,
 
      });
      
       }

       eliminarCategoria_gasto(id:number){

        if(confirm('¿Esta seguro que desea eliminar?')){
    
          this.categoria_gastoServ.deleteCategoria_gasto(id).subscribe(
            respuesta =>{
              console.log(respuesta);
              this.obtenerCategoria_gasto();
      
            },
            error => console.log(error)
            
          )
        }
    
    
        
      }

    



       resetearformCategoria_gasto(){
        this.formCategoria_gasto.reset();
      }


}
