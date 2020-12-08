import { Component, OnInit } from '@angular/core';

import { ProductosService } from "../../services/productos.service";

import { FormBuilder, FormGroup } from "@angular/forms";

import { CategoriasService } from "../../services/categorias.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listProductos = [];

  listCategoria = [];

  formProducto: FormGroup;

  constructor(private productosServ:ProductosService, private fb: FormBuilder, private categoriasServ:CategoriasService) {

    this.formProducto = this.fb.group({

      codigo:[''],
      descripcion:[''],
      precio_compra:[''],
      precio_way:[''],
      precio_final:[''],
      categoria:[0],
      estado:[''],
      descuento:[''],
      

    })

   }

  ngOnInit(): void {
    this.obtenerProductos
  }

  obtenerProductos()
  {
    this.productosServ.getProductos().subscribe(
      resultado => this.listProductos = resultado,
      error => console.log(error),
    )
  }

  guardarProducto()
  {
    this.productosServ.saveProducto(this.formProducto.value).subscribe(
      resultado => {
        console.log(resultado);
        this.obtenerProductos();//se refresca la grilla
        this.formProducto.reset();
        this.formProducto.get('categoria').setValue(0);
      },
      error => console.log(error)
    )
  }

}
