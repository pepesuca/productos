import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';

// creamos un servicio "global", que todos los componentes accederán a el

@Injectable({
  providedIn: 'root'
})

export class GeneralService {

    constructor(
      // llamamos al modulo del spinner como servicio
        private _spinner: NgxSpinnerService
    ) {

    }

    // Mostramos el spinner

    ngMostrarSpinner() {
        this._spinner.show();
    }

    // Ocultamos el spinner
    
    ngOcultarpinner() {
        this._spinner.hide();
    }

    // TODOS LOS MENSAJES DE DIALOGOS Y SU TIPO
    
    mensajeCorrecto(text: string, callBackOk?: any) {
        Swal.fire({
              //position: 'top-end',
              icon: 'success',
              html: text,
              showConfirmButton: true,
              confirmButtonColor: '#06cc13',
              confirmButtonText: 'Cerrar',
              //timer: 4500
        }).then((result) => {
              if (result.isConfirmed) {
                    if (callBackOk) {
                          callBackOk();
                    }
              }
        });
  }

  mensajeError(text: string) {
        Swal.fire({
              //position: 'top-end',
              icon: 'error',
              title: 'Ocurrio un error...',
              html: text,
              showConfirmButton: false,
              showCancelButton: true,
              cancelButtonColor: '#d33',
              cancelButtonText: 'Cerrar'
        });
  }

  mensajeAdvertencia(text: string) {
        Swal.fire({
              //position: 'top-end',
              icon: 'warning',
              html: text,
              iconColor: '#f44336',
              showConfirmButton: false,
              showCancelButton: true,
              cancelButtonColor: '#f44336',
              cancelButtonText: 'Cerrar'
        });
  }

  mensajeTemporalCorrecto(text: string) {
        Swal.fire({
              //position: 'top-end',
              icon: 'success',
              html: text,
              showConfirmButton: false,
              timer: 1500
        });
  }

  mensajeTemporalAdvertencia(text: string) {
        Swal.fire({
              //position: 'top-end',
              icon: 'warning',
              iconColor: '#f44336',
              html: text,
              showConfirmButton: false,
              timer: 1500
        });
  }

  mensajeTemporalError(text: string) {
        Swal.fire({
              //position: 'top-end',
              icon: 'error',
              html: text,
              showConfirmButton: false,
              timer: 1500
        });
  }

  mensajeConfirmacion(text: string, callBackOk?: any) {
        Swal.fire({
              title: 'CONFIRMAR',
              html: text,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#06cc13',
              //confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, estoy de acuerdo',
              cancelButtonText: 'Cancelar'
        }).then((result) => {
              if (result.isConfirmed) {
                    if (callBackOk) {
                          callBackOk();
                    }
              }
        });
  }
  
  mensajeConfirmacionPermanecerPagina(callBackOk?: any, text: string = '¿Salir de esta página?') {
        Swal.fire({
              html: text,
              iconHtml: '?',
              iconColor: '#06cc13',
              showCancelButton: true,
              confirmButtonColor: '#06cc13',
              //confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si',
              cancelButtonText: 'No'
        }).then((result) => {
              if (result.isConfirmed) {
                    if (callBackOk) {
                          callBackOk();
                    }
              }
        });
  }
}