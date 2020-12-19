import { Component, OnInit } from '@angular/core';

import { VentasImpagasPagasService } from "../../services/ventas-impagas-pagas.service";
import { FormBuilder , FormGroup } from "@angular/forms";
import { IVentaImpagaPaga } from "src/app/models/venta_impaga_paga";


@Component({
  selector: 'app-ventas-impagas-pagas',
  templateUrl: './ventas-impagas-pagas.component.html',
  styleUrls: ['./ventas-impagas-pagas.component.css']
})
export class VentasImpagasPagasComponent implements OnInit {
  listVentaImpagaPaga = [];

  formVentaImpagaPaga: FormGroup;

  constructor( private ventaImpagaPagaServ: VentasImpagasPagasService, private fb: FormBuilder ) { 
    this.formVentaImpagaPaga = this.fb.group({
      id_impaga_paga:[''],
      fecha_carga:[''],
      vendedor:[''],
      total:[''],
      debe:[''],
      estado:['']


    })



   }

  ngOnInit(): void {
    this.obtenerVentaImpagaPaga();
  }

  obtenerVentaImpagaPaga(){
    this.ventaImpagaPagaServ.getVentaImpagaPaga().subscribe(

        resultado => this.listVentaImpagaPaga = resultado,
        error => console.log(error)
         
    )
  }

  guardarVentaImpagaPaga(){
    // console.log(this.formProvincia.value);
    if (this.formVentaImpagaPaga.value.id_impaga_paga){

         // si existe el id se actualiza
     this.ventaImpagaPagaServ.updateVentaImpagaPaga(this.formVentaImpagaPaga.value).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerVentaImpagaPaga();
        this.formVentaImpagaPaga.reset();
      },
      error => console.log(error)
  )
    }else{
    
    this.ventaImpagaPagaServ.saveVentaImpagaPaga(this.formVentaImpagaPaga.value).subscribe(
      resultado => {
        console.log(resultado);
        this.obtenerVentaImpagaPaga();//se refresca la grilla
        this.formVentaImpagaPaga.reset();
      },
      error => console.log(error)

    )
  }

 
}

editarVentaImpagaPaga(venta_impaga_paga:IVentaImpagaPaga){
  this.formVentaImpagaPaga.setValue({
    id_impaga_paga:venta_impaga_paga.id_impaga_paga,
    fecha_carga:venta_impaga_paga.fecha_carga,
    vendedor:venta_impaga_paga.vendedor,
    total:venta_impaga_paga.total,
    debe:venta_impaga_paga.debe,
    estado:venta_impaga_paga.estado,

  });
  
   }

   eliminarVentaImpagaPaga(id:number){

    if(confirm('¿Esta seguro que desea eliminar?')){

      this.ventaImpagaPagaServ.deleteVentaImpagaPaga(id).subscribe(
        respuesta =>{
          console.log(respuesta);
          this.obtenerVentaImpagaPaga();
  
        },
        error => console.log(error)
        
      )
    }


}

resetearformVentaImpagaPaga(){
  this.formVentaImpagaPaga.reset();
}}
