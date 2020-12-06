import { Component, OnInit } from '@angular/core';

import { ProductosService } from "../../services/productos.service";

import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listProductos = [];

  formProducto: FormGroup;

  constructor(private productosServ:ProductosService, private fb: FormBuilder) {

    this.formProducto = this.fb.group({

      codigo:[''],
      descripcion:[''],
      precio_compra:[''],
      precio_way:[''],
      precio_final:[''],
      categoria:[''],
      estado:[''],
      descuento:[''],
      

    })

   }

  ngOnInit(): void {
  }

}
