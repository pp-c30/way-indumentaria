import { Component, OnInit } from '@angular/core';

import { GastosService } from "../../services/gastos.service";

import { FormBuilder , FormGroup } from "@angular/forms";

import { CategoriaGastosService } from "../../services/categoria-gastos.service";

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  listGastos = [];

  listCatGastos = [];

  formGasto: FormGroup;

  constructor(private gastosServ:GastosService, private fb: FormBuilder, private gastosCatServ:CategoriaGastosService) {
    
    this.formGasto = this.fb.group({
      descripcion:[''],
      importe:[''],
      categoria:[0]
    })
   }

  ngOnInit(): void {
    this.obtenerGastos();
    this.obtenerCategoriaGastos();
  }

  obtenerGastos()
  {
    this.gastosServ.getGastos().subscribe(
      resultado => this.listGastos = resultado,
      error => console.log(error),
    )
  }

  guardarGasto(){
    // console.log(this.formGasto.value);
    this.gastosServ.saveGasto(this.formGasto.value).subscribe(
      resultado => {
        console.log(resultado);
        this.obtenerGastos();//se refresca la grilla
        this.formGasto.reset();
        this.formGasto.get('categoria').setValue(0);
      },
      error => console.log(error)

    )

  }

  obtenerCategoriaGastos(){
    this.gastosCatServ.getcatGastos().subscribe(
      resultado => this.listCatGastos = resultado
    )
  }

}
