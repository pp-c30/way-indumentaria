import { Component, OnInit } from '@angular/core';

import { LocalidadesService } from "../../services/localidades.service";

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.css']
})
export class LocalidadesComponent implements OnInit {

  listLocalidades = [];

  constructor(private localidadesServ:LocalidadesService) { }

  ngOnInit(): void {
    this.obtenerLocalidades();
  }

  obtenerLocalidades()
  {
    this.localidadesServ.getLocalidades().subscribe(
      resultado => this.listLocalidades = resultado,
      error => console.log(error),
    )
  }

}
