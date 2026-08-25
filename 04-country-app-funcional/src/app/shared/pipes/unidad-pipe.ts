import { formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unidad',
})
export class UnidadPipe implements PipeTransform {
  transform(value: string | number, unit: string = '', shouldFormat: boolean = false): string {
    const formattedValue = (shouldFormat && typeof value === 'number')
      ? formatNumber(value, 'en-US')
      : value;
    
    return unit ? `${formattedValue} ${unit}` : `${formattedValue}`;
  }
}
