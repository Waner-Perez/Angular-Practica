import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {
  // search = signal('');

  // searchText = output<string>();

  // onSeach(value: string) {
  //   // console.log({value});
  //   this.searchText.emit(value);
  // }

  placeholder = input('Buscar')
  value = output<string>();
}
