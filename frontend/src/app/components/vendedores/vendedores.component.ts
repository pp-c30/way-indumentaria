import { Component, OnInit } from '@angular/core';
import { VendedoresService } from "../../services/vendedores.service";
import { FormBuilder , FormGroup } from "@angular/forms";
import { LocalidadesService } from "../../services/localidades.service";

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {

  listVendedores = [];
  formVendedor: FormGroup;
  listVendedoresLoc = [];

  constructor(private vendedoresServ:VendedoresService, private fb: FormBuilder, private vendedorLocServ:LocalidadesService ) {

    this.formVendedor = this.fb.group({
      
      // descripcion:['']
      nombre:[''],
      apellido:[''],
      dni:[''],
      domicilio:[''],
      email:[''],
      localidad:[0],
      adjunto:[''],
      telefono:[''],
      nom_garante:[''],
      ape_garante:[''],
      email_garante:[''],
      dni_garante:[''],
      domicilio_garante:[''],
      telefono_garante:[''],
      estado:['']

    })

   }

  ngOnInit(): void {
    this.obtenerVendedores();
    this.obtenerLocalidades();
  }

  obtenerVendedores(){
    this.vendedoresServ.getVendedores().subscribe(
      resultado => this.listVendedores = resultado,
      error => console.log(error)
    )
  }

  guardarVendedores(){
    // console.log(this.formProvincia.value);
    this.vendedoresServ.saveVendedores(this.formVendedor.value).subscribe(
      resultado => {
        console.log(resultado);
        this.obtenerVendedores();//se refresca la grilla
        this.formVendedor.reset();
        this.formVendedor.get('localidad').setValue(0);
      },
      error => console.log(error)

    )

  }
  obtenerLocalidades(){
    this.vendedorLocServ.getLocalidades().subscribe(
      resultado => this.listVendedoresLoc = resultado
    )
  }

}
