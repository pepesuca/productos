import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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

  constructor(private formBuilder: FormBuilder) { }
  // creamos una variable de tipo formbuilder

  ngOnInit(): void {
    this.agregarForm = this.formBuilder.group(
      // creamos un grupo el cuál tendrá propiedades (tendrá algun valor por defecto y serán requeridos osea obligatorios)
      { 
        //id_producto: [""],
        nombre: ["", Validators.required],
        cantidad: ["", Validators.required],
        precio: ["", Validators.required]
      },
      {
        //para validar algun otro punto
      }
    )
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

    alert(
      "Producto agregado correctamente"
    )

  }

  onReset(){
    // deshabilitamos el envío 
    this.submitted = false;
    // reseteamos todo los valores que tenga el formulario
    this.agregarForm.reset();
  } 

}
