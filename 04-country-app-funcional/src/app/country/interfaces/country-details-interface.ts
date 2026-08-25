export interface CountryDetailsInterface {
    alpha3Code: string;
    name: string;
    flagPng: string;
    flagSvg: string;
    capital: string;
    population: number;
    area: number;
    region: string;
    subregion: string;
    borders: string[];
    languages: { name: string, nativeName: string }[];
    independent: boolean;
    populationDensity: number;
}