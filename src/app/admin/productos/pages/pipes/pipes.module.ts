import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeProductoListadoPipe } from './pipe-producto-listado.pipe';



@NgModule({
  declarations: [
    PipeProductoListadoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeProductoListadoPipe
  ]
})
export class PipesModule { }
