import { Component, OnInit } from '@angular/core';

import { LocalidadesService } from "../../services/localidades.service";

import { FormBuilder , FormGroup } from "@angular/forms";

import { ProvinciasService } from "../../services/provincias.service";

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.css']
})
export class LocalidadesComponent implements OnInit {

  listLocalidades = [];

  listLocProvincias = [];

  formLocalidad: FormGroup;

  constructor(private localidadesServ:LocalidadesService, private fb: FormBuilder, private localidadesProvServ:ProvinciasService) { 

    this.formLocalidad = this.fb.group({
      descripcion:[''],
      provincia:[0]
    })
  }

  ngOnInit(): void {
    this.obtenerLocalidades();
    this.obtenerProvincias();
  }

  obtenerLocalidades()
  {
    this.localidadesServ.getLocalidades().subscribe(
      resultado => this.listLocalidades = resultado,
      error => console.log(error),
    )
  }

  guardarLocalidad()
  {
    this.localidadesServ.saveLocalidad(this.formLocalidad.value).subscribe(
      resultado => {
        console.log(resultado);
        this.obtenerLocalidades();
        this.formLocalidad.reset();
        this.formLocalidad.get('provincia').setValue(0);
      },
      error => console.log(error)
    )
  }

  obtenerProvincias(){
    this.localidadesProvServ.getProvincias().subscribe(
      resultado => this.listLocProvincias = resultado
    )
  }

}
