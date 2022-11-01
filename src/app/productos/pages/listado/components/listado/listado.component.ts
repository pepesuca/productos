import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos/services/productos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.getAllProductos();
  };

  getAllProductos(){
    this.productosService.getProductosApi().subscribe(data => {
      this.productosService.DATA_SOURCE = data;console.log(typeof data)
    })
  };
}
