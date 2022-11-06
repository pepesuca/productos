import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/productos/services/productos.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  typeSelected: string;
  columnsTable: string[] = ['position', 'nombre_producto', 'cantidad_producto', 'precio_producto', 'opcion'];

  constructor(
    private _generalService: GeneralService,
    public productosService: ProductosService,
    private _router: Router,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getAllProductos();
  };


  getAllProductos(){
    this._generalService.ngMostrarSpinner();
    this.productosService.getProductosApi().subscribe(data => {
      this.productosService.DATA_SOURCE = data;
      for(let i of this.productosService.DATA_SOURCE){
        i.position = this.productosService.DATA_SOURCE.indexOf(i)
      }
      this._generalService.ngOcultarpinner();
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
  };

  ngEliminarProducto(id_producto: any):void{
    //inicias el spinner

    this._generalService.mensajeConfirmacion('¿Esta seguro de guardar el producto?', () => {
      this._generalService.ngMostrarSpinner();
      // La data que devuelve es un objeto
      this.productosService.deleteProductoApi(id_producto).subscribe(data => {
        this._generalService.ngOcultarpinner();  
        this.getAllProductos();
        this._generalService.mensajeTemporalCorrecto(`Eliminado correctamente`);
        
      });
    })

  };

  

};
