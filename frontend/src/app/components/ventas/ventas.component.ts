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

  listVendVentas = [];

  formVenta: FormGroup;

  constructor(private ventasServ:VentasService, private fb: FormBuilder, private ventasProServ:ProductosService, private ventasImpPagServ:VentasImpagasPagasService, private ventasVendServ:VendedoresService) {

    this.formVenta = this.fb.group({
      
      id_venta:[null],
      producto:[0],
      cantidad:[''],
      importe:[''],
      fecha_venta:[''],
      importe_unitario:[''],
      estado:[''],
      forma_pago:[''],
      descuento_aplicado:[''],
      planilla:[0],
      vendedor:[0]

    });

   }

  ngOnInit(): void {
    this.obtenerVentas();
    this.obtenerProductos();
    this.obtenerVentasImpPag();
    this.obtenerVendedores();
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
        this.formVenta.reset();
        this.formVenta.get('producto').setValue(0);
        this.formVenta.get('planilla').setValue(0);
        this.formVenta.get('vendedor').setValue(0);
      },
      error => console.log(error)
    )
  }

  obtenerProductos()
  {
    this.ventasProServ.getProductos().subscribe(
      resultado => this.listProVentas = resultado,
      error => console.log(error),
    )
  }

  obtenerVentasImpPag()
  {
    this.ventasImpPagServ.getVentaImpagaPaga().subscribe(
      resultado => this.listImpPagVentas = resultado,
      error => console.log(error),
    )
  }

  obtenerVendedores()
  {
    this.ventasVendServ.getVendedores().subscribe(
      resultado => this.listVendVentas = resultado,
      error => console.log(error)
    )
  }

  resetearformVenta()
  {
    this.formVenta.reset();
  }

}
