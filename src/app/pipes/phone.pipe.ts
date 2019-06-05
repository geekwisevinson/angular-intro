import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const areaCode = value.slice(0, 3);
    const firstPart = value.slice(3, 6);
    const lastPart = value.slice(6, 10);
    return `(${areaCode}) ${firstPart} - ${lastPart}`;
  }

}
