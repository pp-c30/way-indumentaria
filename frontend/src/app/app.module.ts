import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalidadesComponent } from './components/localidades/localidades.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { VentasComponent } from './components/ventas/ventas.component';

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { CategoriaGastosComponent } from './components/categoria-gastos/categoria-gastos.component';
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { MenupComponent } from './components/menup/menup.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LocalidadesComponent,
    GastosComponent,
    VentasComponent,
    CategoriaGastosComponent,
    ProvinciasComponent,
    MenupComponent,
    VendedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
