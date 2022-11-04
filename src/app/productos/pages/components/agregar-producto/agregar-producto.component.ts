import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/productos/models/productos';
import { ProductosService } from 'src/app/productos/services/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  // creamos una variable la cual será de tipo FormGroup
  public agregarForm: FormGroup;
  // creamos otra variable la cual nos dirá si el envío se da o no
  public submitted = false;
  // creamos una variable que nos permitirá esocnder o ocultar el titulo de editar
  public titleEditar = false;
  public titleAgregar = true;
  // creamos otra la cual haga lo mismo pero para el botón
  public botonEditar = false;
  public botonAgregar = true;
  private accion = this.activatedRouter.snapshot.params['accion'];
  public mostrarForm: boolean = false;

  constructor(private formBuilder: FormBuilder, private productoService: ProductosService, private activatedRouter: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    const id_producto = this.activatedRouter.snapshot.params['id'];
    

    if(this.accion === 'editar'){
      this.titleEditar = true;
      this.titleAgregar = false;
      this.botonEditar = true;
      this.botonAgregar = false;
    }

    this.productoService.getOneProductoApi(id_producto).subscribe(data => {
      if(data !== null){
        this.productoService.productoEditar = data
      };
      
      this.agregarForm = this.formBuilder.group(
        // creamos un grupo el cuál tendrá propiedades (tendrá algun valor por defecto y serán requeridos osea obligatorios)
        { 
          id_producto: [this.productoService.productoEditar.id_producto || ''],
          nombre_producto: [this.productoService.productoEditar.nombre_producto || '', Validators.required ],
          cantidad_producto: [this.productoService.productoEditar.cantidad_producto || '', [Validators.required, Validators.pattern("^[0-9]*$")]],
          precio_producto: [this.productoService.productoEditar.precio_producto || '', Validators.required]
        },
        {
          //para validar algun otro punto
        }
      );
      this.mostrarForm = true
    }
      
  );
    
  };

  // un getter el cual nos ayudará a acceder a una variable mas facilmente
  get form(){
    return this.agregarForm.controls;
  };

  onSubmit(){
    // habilitamos el envío
    this.submitted = true;

    // Si algo está inválido
    if (this.agregarForm.invalid) {
      return;
    };

    // Llamamos a nuestra variable de servicio y le pasamos como parametros los valores del formulario
    const dataFormPost: Producto = {
      id_producto: this.agregarForm.value.id_producto,
      nombre_producto: this.agregarForm.value.nombre_producto.toUpperCase(),
      cantidad_producto: this.agregarForm.value.cantidad_producto,
      precio_producto: this.agregarForm.value.precio_producto
    };
    // La data que devuelve es un objeto
    this.productoService.postProductosApi(dataFormPost).subscribe(data => {
      // Recorremos el objeto, creando dos variables (clave y valor) y con Object.entries() pasamos como parámetro el objeto.
      for(const [c, v] of Object.entries(data)){
        if(v === null){
          alert("Ya existe el producto");
        }else {
          alert("Producto agregado correctamente");
        };
      };
    });
  };

  onReset(){
    // deshabilitamos el envío 
    this.submitted = false;
    // reseteamos todo los valores que tenga el formulario
    this.agregarForm.reset();

    //this.productoService.productoEditar = {};
  }; 

}
