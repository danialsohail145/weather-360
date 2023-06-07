import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinCenti'
})
export class KelvinCentiPipe implements PipeTransform {

  transform(value: number) {
    let val = value - 273.15

    return val;
  }

}
