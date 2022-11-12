import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { VerProductosComponent } from './pages/components/ver-productos/ver-productos.component';
import { PipesModule } from '../admin/productos/pages/pipes/pipes.module';


@NgModule({
  declarations: [
    VerProductosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule
  ],
  exports: [
    VerProductosComponent
  ]
})
export class HomeModule { }
