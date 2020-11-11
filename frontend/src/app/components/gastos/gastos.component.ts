import { Component, OnInit } from '@angular/core';

import { GastosService } from "../../services/gastos.service";

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  listGastos = [];

  constructor(private gastosServ:GastosService) { }

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

}
