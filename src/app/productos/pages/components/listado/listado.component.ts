import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/productos/services/productos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(
    public productosService: ProductosService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getAllProductos();
  };

  getAllProductos(){
    this.productosService.getProductosApi().subscribe(data => {
      this.productosService.DATA_SOURCE = data;//console.log( data)
    })
  };

  ngAgregarProducto() {
    // navegamos hacia una ruta la cual apunta hacia un componente
    this._router.navigate(
      ['/productos/agregar']
    );
  }

  ngEditarProducto(id_producto: any) {
    // navegamos hacia editar, añadimos un parametro el cual se llamará id_producto 
    this._router.navigate(
      ['/productos/editar'],
      {
        queryParams: {
          id_producto: id_producto
        }
      }
    );
  }

}
