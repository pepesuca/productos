import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/productos/models/productos';
import { ProductosService } from 'src/app/productos/services/productos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

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


  // creamos una variable de tipo formbuilder
  constructor(private formBuilder: FormBuilder, private productoService: ProductosService, private activatedRouter: ActivatedRoute) { 
    const id_producto = this.activatedRouter.snapshot.params['id'];
    if(this.accion === 'editar'){
      if(id_producto !== undefined){
        this.titleEditar = true;
        this.titleAgregar = false;
        this.botonEditar = true;
        this.botonAgregar = false;
     
      };  
    }
    
  }

  ngOnInit(): void {
    
    this.agregarForm = this.formBuilder.group(
      // creamos un grupo el cuál tendrá propiedades (tendrá algun valor por defecto y serán requeridos osea obligatorios)
      { 
        id_producto: [this.productoService.productoEditar.id_producto],
        nombre_producto: [this.productoService.productoEditar.nombre_producto, Validators.required ],
        cantidad_producto: [this.productoService.productoEditar.cantidad_producto, [Validators.required, Validators.pattern("^[0-9]*$")]],
        precio_producto: [this.productoService.productoEditar.precio_producto, Validators.required]
      },
      {
        //para validar algun otro punto
      }
    );

    if(this.accion === 'agregar'){
      this.agregarForm.reset();
    }
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
    // La data que devuelve es un objeto
    this.productoService.postProductosApi(this.agregarForm.value).subscribe(data => {
      // Recorremos el objeto, creando dos variables (clave y valor) y con Object.entries() pasamos como parámetro el objeto.
      for(const [c, v] of Object.entries(data)){
        if(v === "Ya existe el producto"){
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
};
