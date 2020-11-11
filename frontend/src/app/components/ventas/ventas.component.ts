import { Component, OnInit } from '@angular/core';

import { VentasService } from "../../services/ventas.service";

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  listVentas = [];

  constructor(private ventasServ:VentasService) { }

  ngOnInit(): void {
    this.obtenerVentas
  }

  obtenerVentas()
  {
    this.ventasServ.getVentas().subscribe(
      resultado => this.listVentas = resultado,
      error => console.log(error),
    )
  }

}
