import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaGastosComponent } from "./components/categoria-gastos/categoria-gastos.component";
import { GastosComponent } from "./components/gastos/gastos.component";
import { LocalidadesComponent } from "./components/localidades/localidades.component";
import { ProvinciasComponent } from "./components/provincias/provincias.component";
import { VentasComponent } from "./components/ventas/ventas.component";

const routes: Routes = [
  {
    path:"categoriaGastos",component:CategoriaGastosComponent
  },
  {
    path:"gastos",component:GastosComponent
  },
  {
    path:"localidades",component:LocalidadesComponent
  },
  {
    path:"provincias",component:ProvinciasComponent
  },
  {
    path:"ventas",component:VentasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
