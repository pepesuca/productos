import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private URL_API = 'http://127.0.0.1:4000/api/productos';
  public DATA_SOURCE:Producto[] = [];
  public productoEditar:Producto = {
    id_producto: 0,
    nombre_producto: '',
    cantidad_producto: 0,
    precio_producto: 0
  };


  constructor(private http: HttpClient) { }

  getProductosApi():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.URL_API)
  };

  postProductosApi(data:Producto){
    return this.http.post(this.URL_API, data);
  };

  getOneProductoApi(id_producto:any):Observable<Producto>{
    return this.http.get<Producto>(this.URL_API + "/" + id_producto);
  };

  putOneProductoApi(id_producto:any, data:Producto){
    return this.http.put(this.URL_API + "/" + id_producto, data);
  }

};
