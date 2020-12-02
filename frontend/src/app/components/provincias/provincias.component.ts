
import { Component, OnInit } from '@angular/core';

import { ProvinciasService } from "../../services/provincias.service";

import { FormBuilder , FormGroup } from "@angular/forms";

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  listProvincias = [];

  formProvincia: FormGroup;

      // crear una instancia de pagosServ
  constructor(private provinciasServ:ProvinciasService, private fb: FormBuilder) {

    this.formProvincia = this.fb.group({
      
      descripcion:['']


    })

   }

  ngOnInit(): void {
  this.obtenerProvincias();
  }

  obtenerProvincias(){
    this.provinciasServ.getProvincias().subscribe(
      resultado => this.listProvincias = resultado,
      error => console.log(error)
    )
  }

  guardarProvincia(){
    // console.log(this.formProvincia.value);
    this.provinciasServ.saveProvincias(this.formProvincia.value).subscribe(
      resultado => {
        console.log(resultado);
        this.obtenerProvincias();//se refresca la grilla
        this.formProvincia.reset();
      },
      error => console.log(error)

    )

  }

}
