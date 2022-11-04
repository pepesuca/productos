import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';

import { ListadoComponent } from './pages/components/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarProductoComponent } from './pages/components/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './pages/components/agregar-producto/agregar-producto.component';
import { PipeProductoListadoPipe } from './pages/pipes/pipe-producto-listado.pipe';



@NgModule({
  declarations: [
    ListadoComponent,
    EditarProductoComponent,
    AgregarProductoComponent,
    PipeProductoListadoPipe
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListadoComponent,
    EditarProductoComponent,

    
  ]
})
export class ProductosModule { }
