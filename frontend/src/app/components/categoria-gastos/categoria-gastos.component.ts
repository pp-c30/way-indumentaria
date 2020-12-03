import { Component, OnInit } from '@angular/core';

import { CategoriaGastosService } from "../../services/categoria-gastos.service"

import { FormBuilder , FormGroup } from "@angular/forms";

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
