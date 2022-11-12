import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Option } from 'src/app/models/options';
import { Producto } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import { GeneralService } from 'src/app/shared/services/general.service';

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
  public mostrarForm: boolean = false;

  private dataFormPost: Producto = {}

  //public valuesSelectView: string[] = ['Alimentos', 'Hogar', 'Oficina', 'Prendas de vestir', 'Otros']
  //public valuesSelect: string[] = ['alimentos', 'hogar', 'oficina', 'prendas de vestir', 'otros']

  public valuesSelect: Option[] = [
    {valor: 'alimentos', valorView: 'Alimentos'},
    {valor: 'hogar', valorView: 'Hogar'},
    {valor: 'oficina', valorView: 'Oficina'},
    {valor: 'prendas de vestir', valorView: 'Prendas de vestir'},
    {valor: 'otros', valorView: 'Otros'}
  
  ]

  //manten un orden en el codigo
  constructor(
    private _generalService: GeneralService,
    private formBuilder: FormBuilder, 
    private productoService: ProductosService, 
    private activatedRouter: ActivatedRoute,
    private _router: Router
    ) { 
    
  }

  ngOnInit(): void {
  
    this.agregarForm = this.formBuilder.group(
      // creamos un grupo el cuál tendrá propiedades (tendrá algun valor por defecto y serán requeridos osea obligatorios)
      { 
        id_producto: [this.productoService.formatPorducto.id_producto || ''],
        tipo_producto: [this.productoService.formatPorducto.tipo_producto || '', Validators.required],
        nombre_producto: [this.productoService.formatPorducto.nombre_producto || '', Validators.required ],
        cantidad_producto: [this.productoService.formatPorducto.cantidad_producto || '', [Validators.required, Validators.pattern("^[0-9]*$")]],
        precio_producto: [this.productoService.formatPorducto.precio_producto || '', Validators.required],
        file: ['', Validators.required],
        file_img: ['', Validators.required]
      },
      {
        //para validar algun otro punto
      }
    );
    this.mostrarForm = true    
  
    
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

    // variable que almacenará los datos antes de mandarlos al api
    this.dataFormPost = {
      id_producto: this.agregarForm.value.id_producto,
      tipo_producto: this.agregarForm.value.tipo_producto.toUpperCase(),
      nombre_producto: this.agregarForm.value.nombre_producto.toUpperCase(),
      cantidad_producto: this.agregarForm.value.cantidad_producto,
      precio_producto: this.agregarForm.value.precio_producto,
      file_img: this.agregarForm.value.file_img
    };

    
    // Llamamos a nuestra variable de servicio y le pasamos como parametros los valores del formulario

    this._generalService.mensajeConfirmacion('¿Esta seguro de guardar el producto?', () => {
      this._generalService.ngMostrarSpinner();
      
      this.productoService.postImagenApi(this.dataFormPost.file_img).subscribe(response => {
        console.log(response);
      });
      // La data que devuelve es un objeto
      this.productoService.postProductosApi(this.dataFormPost).subscribe(data => {
        this._generalService.ngOcultarpinner();
        // Recorremos el objeto, creando dos variables (clave y valor) y con Object.entries() pasamos como parámetro el objeto.
        for(const [c, v] of Object.entries(data)){
          if(v === null){
            this._generalService.mensajeTemporalAdvertencia("Ya existe el producto");
          }else {
            this._generalService.mensajeTemporalCorrecto("Producto agregado correctamente");
            this.onReset();
          };
        };
      });
    })
  };
  
  ngSalir() {
    this._router.navigate(['/admin/productos/listado']);
  }

  onReset(){
    // deshabilitamos el envío 
    this.submitted = false;
    // reseteamos todo los valores que tenga el formulario
    this.agregarForm.reset();

    //this.productoService.formatPorducto = {};
  }; 

  onFileChange(event:any) {
    console.log(event.target.files.length)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.agregarForm.patchValue({
        file_img: file
      })
      this.dataFormPost.file_img = file; 
    }

  };

}
