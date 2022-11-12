import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent implements OnInit {

  constructor(
    public _productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.ngObtenerProductos();
  }

  ngObtenerProductos(){
    this._productosService.getProductosApi().subscribe(data => {
      this._productosService.DATA_SOURCE = data; console.log(data)
    })
  }

}
