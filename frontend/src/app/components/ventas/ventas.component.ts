import { Component, OnInit } from '@angular/core';

import { VentasService } from "../../services/ventas.service";

import { FormBuilder, FormGroup } from "@angular/forms";

import { VendedoresService } from "../../services/vendedores.service";

import { VentasImpagasPagasService } from "../../services/ventas-impagas-pagas.service";

import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  listVentas = [];

  listProVentas = [];

  listImpPagVentas = [];

  formVenta: FormGroup;

  constructor(private ventasServ:VentasService, private fb: FormBuilder, private ventasProServ:ProductosService, private ventasImpPagServ:VentasImpagasPagasService, private ventasVend:VendedoresService) {

    this.formVenta = this.fb.group({
      
      producto:[''],
      cantidad:[''],
      importe:[''],
      fecha_venta:[''],
      importe_unitario:[''],
      estado:[''],
      forma_pago:[''],
      descuento_aplicado:[''],
      planilla:[''],
      vendedor:['']

    });

   }

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

  guardarVenta()
  {
    this.ventasServ.saveVenta(this.formVenta.value).subscribe(
      resultado => {
        console.log(resultado);
        this.obtenerVentas();
      }
    );
  }

}
