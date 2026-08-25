import { getTranslatedName } from "../../shared/util/translateText";
import type { CountriesInterface } from "../interfaces/countries-interface";
import type { RESTCountry } from "../interfaces/rest-countries.interfaces";

export class CountryMapper {
    static mapRestCountry = (restCountry: RESTCountry) : CountriesInterface => {
        return {
            alpha3Code: restCountry.alpha3Code,
            name: getTranslatedName(restCountry.alpha2Code, 'es', 'region'),
            flagPng: restCountry.flags.png,
            flagSvg: restCountry.flags.svg,
            capital: restCountry.capital,
            population: restCountry.population,
        }
    }

    static mapRestCountryArray = (restCountries: RESTCountry[]) : CountriesInterface[] => restCountries.map(this.mapRestCountry);
    // static mapRestCountryArray = (restCountries: RESTCountry[]) : CountriesInterface[] => restCountries.map((country) => this.mapRestCountry(country)); //esto es lo mismo que la linea comentada de arriba, pero con una funcion anonima para que no se pierda el contexto de this
}