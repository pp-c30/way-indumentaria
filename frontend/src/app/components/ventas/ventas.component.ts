import { Component, OnInit } from '@angular/core';

import { VentasService } from "../../services/ventas.service";

import { FormBuilder, FormGroup } from "@angular/forms";

import { VendedoresService } from "../../services/vendedores.service";

import { VentasImpagasPagasService } from "../../services/ventas-impagas-pagas.service";

import { ProductosService } from "../../services/productos.service";

import { IVenta } from "../../models/venta";



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

    if(this.formVenta.value.id_venta){
    
           // si existe el id se actualiza
     this.ventasServ.updateVenta(this.formVenta.value).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerVentas();
        this.formVenta.reset();
      },
      error => console.log(error)
  )

    }else{
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
  }}

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

  eliminarVenta(id:number){

    if(confirm('¿Esta seguro que desea eliminar?')){

      this.ventasServ.deleteVenta(id).subscribe(
        respuesta =>{
          console.log(respuesta);
          this.obtenerVentas();
  
        },
        error => console.log(error)
        
      )
    }


}
editarVenta(venta:IVenta){
  this.formVenta.setValue({
    id_venta:venta.id_venta,
    fecha_venta:{year:Number(venta.year),month:Number(venta.month),day:Number(venta.day)},
    producto:venta.producto,
    importe:venta.importe,
    cantidad:venta.cantidad,
    importe_unitario:venta.importe_unitario,
    estado:venta.estado,
    forma_pago:venta.forma_pago,
    descuento_aplicado:venta.descuento_aplicado,
    planilla:venta.planilla,
    vendedor:venta.vendedor_venta,


  });
  
   }

  
}
