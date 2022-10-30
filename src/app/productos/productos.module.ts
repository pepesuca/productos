import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListadoComponent } from './pages/listado/components/listado/listado.component';
import { AgregarComponent } from './pages/agregar/components/agregar/agregar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListadoComponent,
    AgregarComponent
  ]
})
export class ProductosModule { }
