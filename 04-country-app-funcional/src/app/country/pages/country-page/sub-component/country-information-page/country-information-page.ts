import { Component, computed, input } from '@angular/core';
import { CountryDetailsInterface } from '../../../../interfaces/country-details-interface';
import { CountryInfoItems } from "../country-info-items/country-info-items";
import { InfoItemInterface } from '../../../../interfaces/info-item-interface';

@Component({
  selector: 'app-country-information-page',
  imports: [CountryInfoItems],
  templateUrl: './country-information-page.html',
})
export class CountryInformationPage {
  countryDetail = input.required<CountryDetailsInterface>();

  infoItems = computed<InfoItemInterface[]>(() => [
    { 
      label: 'Capital', 
      value: this.countryDetail().capital, 
    },
    { 
      label: 'Población', 
      value: this.countryDetail().population,
      format: true, 
    },
    { 
      label: 'Región', 
      value: this.countryDetail().region, 
    },
    { 
      label: 'Subregión', 
      value: this.countryDetail().subregion, 
    },
    { 
      label: '¿Pais Independiente?', 
      value: (this.countryDetail().independent) ? "Si" : "No", 
    },
    { 
      label: 'Área', 
      value: this.countryDetail().area, 
      format: true, 
      unit: 'km²' 
    },
    { 
      label: 'Densidad de Población', 
      value: this.countryDetail().populationDensity, 
      format: true, 
      unit: 'hab/km²' 
    },
    {
      label: 'Fronteras',
      list: this.countryDetail().borders,
    },
    { 
      label: 'Lenguajes', 
      list: this.countryDetail().languages.map(l => `${l.name} (${l.nativeName})`), 
    },
  ]);

  /*
    infoItems = computed(() => [
      { 
        label: 'Capital', 
        value: this.countryDetail().capital, 
        format: false, 
        unit: '' 
      },
      { 
        label: 'Población', 
        value: this.countryDetail().population, 
        format: true, 
        unit: '' 
      },
      { 
        label: 'Región', 
        value: this.countryDetail().region, 
        format: false, 
        unit: '' 
      },
      { 
        label: 'Subregión', 
        value: this.countryDetail().subregion, 
        format: false, 
        unit: '' 
      },
      { 
        label: '¿Pais Independiente?', 
        value: (this.countryDetail().independent) ? "Si" : "No", 
        format: false, 
        unit: '' 
      },
      { 
        label: 'Área', 
        value: this.countryDetail().area, 
        format: true, 
        unit: 'km²' 
      },
      { 
        label: 'Densidad de Población', 
        value: this.countryDetail().populationDensity, 
        format: true, 
        unit: 'hab/km²' 
      },
      { 
        label: 'Lenguajes', 
        value: this.countryDetail().languages, 
        format: false, 
        unit: '' 
      },
    ]);
  */
}

/*
  Por qué computed() en vez de un array fijo: como los valores dependen 
  de countryDetail() (un signal), necesitas que el array se recalcule cada 
  vez que ese signal cambie (por ejemplo, al navegar a otro país). 
  Un array normal (infoItems = [...]) se calcularía una sola vez al crear el 
  componente y quedaría con los datos del primer país para siempre.
*/