
import { Component, OnInit } from '@angular/core';

import { ProvinciasService } from "../../services/provincias.service";

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  listProvincias = [];

      // crear una instancia de pagosServ
  constructor(private provinciasServ:ProvinciasService) {

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

}
