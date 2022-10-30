import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public agregarForm: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.agregarForm = this.formBuilder.group(
      { 
        id_producto: [""],
        nombre: ["", Validators.required],
        cantidad: ["", Validators.required],
        precio: ["", Validators.required]
      },
      {

      }
    )
  };

  get Form(){
    return this.agregarForm.controls;
  };

  onSubmit(){
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
    this.submitted = false;
    this.agregarForm.reset();
  } 

}
