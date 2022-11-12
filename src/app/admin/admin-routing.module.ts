import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProductoComponent } from './productos/pages/components/editar-producto/editar-producto.component';

import { AgregarProductoComponent } from './productos/pages/components/agregar-producto/agregar-producto.component';
import { ListadoComponent } from './productos/pages/components/listado/listado.component';

const routes: Routes = [
      {path: 'productos', children: [
        {path: 'listado', component: ListadoComponent},
        {path: 'agregar', component: AgregarProductoComponent},
        {path: 'editar', component: EditarProductoComponent},
      
      ]}
      //{path: 'editar/:id', component: AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
