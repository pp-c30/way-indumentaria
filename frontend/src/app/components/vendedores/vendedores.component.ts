import { Component, OnInit } from '@angular/core';
import { VendedoresService } from "../../services/vendedores.service";

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {

  listVendedores = [];

  constructor(private vendedoresServ:VendedoresService) { }

  ngOnInit(): void {
    this.obtenerVendedores();
  }

  obtenerVendedores(){
    this.vendedoresServ.getVendedores().subscribe(
      resultado => this.listVendedores = resultado,
      error => console.log(error)
    )
  }

}
