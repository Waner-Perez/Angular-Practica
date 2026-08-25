import { Component, inject, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom, of } from 'rxjs';

import { CountrySearchInput } from "../../components/country-search-input/country-search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-by-country-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  // search = (query: string) => console.log({query})

  countryService = inject(CountryService);
  search = signal('');

  countryResource = rxResource({
    params: () => ({ query: this.search() }),
    stream: ({ params }) => {
      if(!params.query) return of([]);
      return this.countryService.searchByCountry(params.query);
    }
  })

  // countryResource = resource({
  //   params: () => ({ query: this.search()}),
  //   loader: async({ params }) => {
  //     if(!params.query) return [];

  //     const result = await firstValueFrom(this.countryService.searchByCountry(params.query))

  //     console.log('result', result)

  //     return result;
  //   }
  // })
}
