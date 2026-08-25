import { 
  Component, 
  inject, 
  // resource,
  signal 
} from '@angular/core';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country-service';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';
import { CountryMapper } from '../../mappers/country-mapper';
import type { CountriesInterface } from '../../interfaces/countries-interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
// import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  countryService = inject(CountryService);
  query = signal('');

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if(!params.query) return of([]);
      // return this.countryService.searchByCapital(params.query);
      const result = this.countryService.searchByCapital(params.query);

      console.log('result', result);

      return result;
    }
  });

  // countryResource = resource({ version con promesas
  //   params: () => ({ query: this.query() }),
  //   loader: async({ params }) => {
  //     if(!params.query) return [];

  //     const result = await firstValueFrom(this.countryService.searchByCapital(params.query))

  //     console.log('result', result)

  //     return result;
  //   }
  // })

  /*
    A diferencia del código de abajo (isLoading, isError, countries a mano):
    - resource() ya trae isLoading/error/value integrados, sin crear signals propios
    - Se dispara solo cuando cambia this.query() — no hace falta un método onSeach()
    - Si buscas rápido varias veces, cancela la petición anterior sola
  */

  /* Esta hecho con codigo abundante
    isLoading = signal(false);
    isError = signal<string | null>(null)
    // countries = signal<RESTCountry[]>([]); //Esta forma no es recomendado
    countries = signal<CountriesInterface[]>([]); //Esta forma no es recomendado

    onSeach(query: string) {
      if(this.isLoading()) return;

      this.isLoading.set(true);
      this.isError.set(null);

      // this.countryService.searchByCapital(query).subscribe((countries) => {
      //   this.isLoading.set(false);
      //   this.countries.set(countries)

      //   // const mappedCountries = CountryMapper.mapRestCountryArray(countries); otra forma de hacer mapping, pero no es recomendable porque se pierde el contexto de this

      //   console.log(countries)
      // })

      this.countryService.searchByCapital(query).subscribe({
        next: ( countries ) => {
          this.isLoading.set(false);
          this.countries.set(countries);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.countries.set([]);
          // this.isError.set(err.message || `No se pudo encontrar el país con esa capital: ${query}`); esta forma de manejo de error no es reomendado
          this.isError.set(err);        
        }
      })
    }
  */
}