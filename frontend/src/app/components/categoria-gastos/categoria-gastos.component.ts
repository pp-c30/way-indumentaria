import { Component, OnInit } from '@angular/core';


import { CategoriaGastosService } from "../../services/categoria-gastos.service"

@Component({
  selector: 'app-categoria-gastos',
  templateUrl: './categoria-gastos.component.html',
  styleUrls: ['./categoria-gastos.component.css']
})
export class CategoriaGastosComponent implements OnInit {

  listCategoria_gasto = [];

  constructor( private categoria_gastoServ: CategoriaGastosService ) { }

  ngOnInit(): void {
    this.obtenerCategoria_gasto();
  }

    obtenerCategoria_gasto(){
      this.categoria_gastoServ.getcatGastos().subscribe(

          resultado => this.listCategoria_gasto = resultado,
          error => console.log(error)
           
      )
    }



}
