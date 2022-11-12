import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerProductosComponent } from './pages/components/ver-productos/ver-productos.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'ver_productos', component: VerProductosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
