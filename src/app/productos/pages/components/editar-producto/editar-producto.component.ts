import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../models/productos';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  // creamos una variable la cual será de tipo FormGroup
  public editarForm: FormGroup;
  // creamos otra variable la cual nos dirá si el envío se da o no
  public submitted:boolean = false;
  public isLoadForm: boolean = false;

  // creamos una variable de tipo formbuilder
  constructor(
    private _formBuilder: FormBuilder, 
    private _productoService: ProductosService, 
    private _activatedRouter: ActivatedRoute,
    private _router: Router,
  ) { 
    
  }

  ngOnInit(): void {
    this.ngObtenerProducto();
  }
    
  ngObtenerProducto() {
    // no permitimos que el formulario se cargue
    this.isLoadForm = false;
    // recuperamos el parámetro
    const id_producto = this._activatedRouter.snapshot.queryParams['id_producto'];
    this._productoService.getOneProductoApi(id_producto).subscribe(data => {
      if(data !== null) {
        const dataFormPost: Producto = {
          id_producto: data.id_producto,
          nombre_producto: data.nombre_producto,
          cantidad_producto: data.cantidad_producto,
          precio_producto: data.precio_producto
        };
        this.editarForm = this._formBuilder.group(
          // creamos un grupo el cuál tendrá propiedades (tendrá algun valor por defecto y serán requeridos osea obligatorios)
          { 
            id_producto: [dataFormPost.id_producto],
            nombre_producto: [this.capitalizarPalabras(dataFormPost.nombre_producto), Validators.required ],
            cantidad_producto: [dataFormPost.cantidad_producto, [Validators.required, Validators.pattern("^[0-9]*$")]],
            precio_producto: [dataFormPost.precio_producto, Validators.required]
          }
        );
        // una vez la data sea recuperad, mostraremos el formulatio
        this.isLoadForm = true;
      }
    }, error => {console.log(error)});
  }
  
  onSubmit() {
    this.submitted = true;

    // Si algo está inválido
    if (this.editarForm.invalid) {
      return;
    };
    // Si algo está inválido
    if (this.editarForm.valid)  {
      // Llamamos a nuestra variable de servicio y le pasamos como parametros los valores del formulario
      const dataFormPut: Producto = {
        id_producto: this.editarForm.value.id_producto,
        nombre_producto: this.editarForm.value.nombre_producto.toUpperCase(),
        cantidad_producto: this.editarForm.value.cantidad_producto,
        precio_producto: this.editarForm.value.precio_producto
      };

      // La data que devuelve es un objeto
      this._productoService.putOneProductoApi(dataFormPut.id_producto,dataFormPut).subscribe(data => {
        // Recorremos el objeto, creando dos variables (clave y valor) y con Object.entries() pasamos como parámetro el objeto.
          for(let [c, v] of Object.entries(data)){
            console.log(v)
            if(v === null){
              alert("El producto ya existe");
            }else{alert("Producto editado")}
          }
        }
      );
    }    
  }

  get form(){
    return this.editarForm.controls;
  };

  ngSalir() {
    this._router.navigate(['/productos/listado']);
  }

  onReset(){
    // deshabilitamos el envío 
    this.submitted = false;
    // reseteamos todo los valores que tenga el formulario
    this.editarForm.reset();

    //this.productoService.productoEditar = {};
  }; 

  capitalizarPalabras(text: any){
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
  }

}
