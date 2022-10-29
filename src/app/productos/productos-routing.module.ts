import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/components/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/components/listado/listado.component';

const routes: Routes = [
  {
    path: '', children: [
      {path: 'listado', component: ListadoComponent},
      {path: 'agregar', component: AgregarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
