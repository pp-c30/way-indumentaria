import { Component, OnInit } from '@angular/core';

import { GastosService } from "../../services/gastos.service";

import { FormBuilder , FormGroup } from "@angular/forms";

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  listGastos = [];

  formGasto: FormGroup;

  constructor(private gastosServ:GastosService, private fb: FormBuilder) {
    
    this.formGasto = this.fb.group({
      
      descripcion:[''],
      importe:[''],
      categoria:['']


    })
   }

  ngOnInit(): void {
    this.obtenerGastos();
  }

  obtenerGastos()
  {
    this.gastosServ.getGastos().subscribe(
      resultado => this.listGastos = resultado,
      error => console.log(error),
    )
  }

  guardarGastos(){
    // console.log(this.formGasto.value);
    this.gastosServ.saveGastos(this.formGasto.value).subscribe(
      resultado => {
        console.log(resultado);
        this.obtenerGastos();//se refresca la grilla
        this.formGasto.reset();
      },
      error => console.log(error)

    )

  }

}
