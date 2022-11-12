import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { ListadoComponent } from './productos/pages/components/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarProductoComponent } from './productos/pages/components/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './productos/pages/components/agregar-producto/agregar-producto.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PipesModule } from './productos/pages/pipes/pipes.module';

@NgModule({
  declarations: [
    ListadoComponent,
    EditarProductoComponent,
    AgregarProductoComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatOptionModule,
    PipesModule
  ],
  exports: [
    ListadoComponent,
    EditarProductoComponent,
    
    
  ]
})
export class AdminModule { }
