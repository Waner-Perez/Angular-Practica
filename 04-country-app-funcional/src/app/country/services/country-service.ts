import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import type { CountriesInterface } from '../interfaces/countries-interface';
import { CountryMapper } from '../mappers/country-mapper';
import { DetailsMapper } from '../mappers/details-mapper';

// const API_URL = 'https://api.restcountries.com/countries/v5'
const API_URL = 'https://countries.dev'

@Service()
export class CountryService {
    private http = inject(HttpClient);

    // searchByCapital = (query: string) => {
    //     query = query.toLowerCase();

    //     return this.http.get(`${API_URL}/capitals/${query}`, {
    //         headers: {
    //             Authorization: 'Bearer rc_live_f9c98567878d4b26a109ded639e994d8' 
    //         }
    //     });
    // }

    // searchByCapital = (query: string) => {
    //     query = query.toLowerCase();

    //     // return this.http.get(`${API_URL}/capital/${query}`);
    //     return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`);
    // }

    searchByCapital = (query: string) : Observable<CountriesInterface[]> => {
        query = query.toLowerCase();

        return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
            // Aquí puedes agregar operadores de RxJS si es necesario, para el mapeo de datos o manejo de errores
            .pipe(
                map(CountryMapper.mapRestCountryArray),
                catchError((error) => {
                    console.log('Error fetching ', error);
                    return throwError(() => new Error(`No se pudo obtener países con ese query: ${query}`));
                })
            )
    }

    searchByCountry = (query: string) : Observable<CountriesInterface[]> => {
        const url = `${API_URL}/name/${query}`;
        query = query.toLowerCase();

        return this.http.get<RESTCountry[]>(url).pipe(
            map(CountryMapper.mapRestCountryArray),
            delay(3000), // Simula un retraso de 3 segundos
            catchError((error) => {
                console.log('Error fetching ', error);
                return throwError(() => new Error(`No se pudo obtener países con ese query: ${query}`));
            })
        )
    }

    searchCountryByAlpha = (code: string) => {
        const url = `${API_URL}/alpha/${code}`;

        return this.http.get<RESTCountry>(url).pipe(
            // map(CountryMapper.mapRestCountry),
            map(DetailsMapper.mapRestCountryToCountryDetalls),
            // map( countries => countries.at(0) ),
            catchError((error) => {
                console.log('Error fetching ', error);
                return throwError(
                    () => new Error(`No se pudo obtener país con ese código: ${code}`)
                )
            })
        )
    }
}