import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';

import { ListadoComponent } from './pages/components/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarProductoComponent } from './pages/components/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './pages/components/agregar-producto/agregar-producto.component';
import { PipeProductoListadoPipe } from './pages/pipes/pipe-producto-listado.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


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
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    ListadoComponent,
    EditarProductoComponent,

    
  ]
})
export class ProductosModule { }
