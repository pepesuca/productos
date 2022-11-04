import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeName'
})
export class PipeProductoListadoPipe implements PipeTransform {

  transform(name: any): string {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
  }

}
