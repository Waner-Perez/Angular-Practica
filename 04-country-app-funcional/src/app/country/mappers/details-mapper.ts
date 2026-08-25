import { getTranslatedName } from "../../shared/util/translateText";
import { CountryDetailsInterface } from "../interfaces/country-details-interface";
import { RESTCountry } from "../interfaces/rest-countries.interfaces";

export class DetailsMapper {
    static mapRestCountryToCountryDetalls = (restCountry: RESTCountry) : CountryDetailsInterface => {
        return {
            alpha3Code: restCountry.alpha3Code,
            name: getTranslatedName(restCountry.alpha2Code, 'es', 'region'),
            flagPng: restCountry.flags.png,
            flagSvg: restCountry.flags.svg,
            capital: restCountry.capital,
            population: restCountry.population,
            area: restCountry.area,
            region: restCountry.region,
            subregion: restCountry.subregion,
            borders: restCountry.borders,
            languages: restCountry.languages.map(({name, nativeName}) => ({name, nativeName})),
            independent: restCountry.independent,
            populationDensity: restCountry.populationDensity,
        }
    }

    // static mapRestCountryArrayToCountryDetails = (restCountries: RESTCountry[]) : CountryDetailsInterface[] => restCountries.map(this.mapRestCountryToCountryDetalls);
}