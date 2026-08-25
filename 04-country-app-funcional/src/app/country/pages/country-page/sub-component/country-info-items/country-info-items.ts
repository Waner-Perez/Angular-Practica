import { Component, input } from '@angular/core';
import { UnidadPipe } from '../../../../../shared/pipes/unidad-pipe';

@Component({
  selector: 'app-country-info-items',
  imports: [UnidadPipe],
  templateUrl: './country-info-items.html',
})
export class CountryInfoItems {
  label = input.required<string>();
  value = input<string | number>();
  format = input<boolean>();
  unit = input<string>();
  list = input<string[]>();
}