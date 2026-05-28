import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

import { environment } from '@environments/environment';
import { Gif } from '../interfaces/gif.interface';
import type { GiphyResponse } from '../interfaces/giphy.interfaces'; // Se le poner el type para que no se importe el archivo completo, solo la interfaz que se necesita. Esto ayuda a reducir el tamaño del bundle final.
import { GifMapper } from '../mapper/gif.mapper';

const GIF_KEY: string = 'gifs';

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}'; //Record<string, Gif[]> es un tipo de dato que representa un objeto con claves de tipo string y valores de tipo Gif[]. En este caso, se utiliza para indicar que el valor almacenado en localStorage bajo la clave GIF_KEY es un objeto que tiene como claves las consultas de búsqueda (query) y como valores los arrays de gifs correspondientes a cada consulta. El operador ?? se utiliza para proporcionar un valor por defecto en caso de que localStorage.getItem(GIF_KEY) devuelva null, lo que significa que no hay ningún valor almacenado bajo esa clave. En este caso, se devuelve un string vacío '{}' que representa un objeto vacío. Luego, se parsea ese string a un objeto utilizando JSON.parse para poder trabajar con él en el código.
  const gifs = JSON.parse(gifsFromLocalStorage);
  console.log({ gifsFromLocalStorage: gifs });
  return gifs
}

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  // searchHistory = signal<Record<string, Gif[]>>({});
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory())); // El computed es una función que se ejecuta cada vez que se actualiza la señal searchHistory. En este caso, se utiliza para obtener las claves del objeto searchHistory y devolverlas como un array de strings. Esto es útil para mostrar el historial de búsquedas en el componente.

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  })

  loadTrendingGifs = () => {
    this.http.get<GiphyResponse>(`${ environment.giphyApiUrl }/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
      },
    }).subscribe((resp) => {
      // console.log({resp});
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log({ gifs });
    });
  }

  // searchGifs = ( query: string ) => {
  searchGifs = ( query: string ): Observable<Gif[]> => { //Recomendable poner el tipo de retorno para que sea más fácil de entender y evitar errores. En este caso, se indica que el método searchGifs devuelve un Observable de un array de Gif. Esto es importante porque el método searchGifs realiza una petición HTTP que devuelve un Observable, y es necesario indicar el tipo de datos que se espera recibir para poder trabajar con ellos de manera correcta.
    return this.http
      .get<GiphyResponse>(`${ environment.giphyApiUrl }/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: query,
          limit: 20,
        },
      })
      .pipe( //El pipe es un operador de RxJS que permite encadenar operadores para transformar los datos que se reciben de la petición HTTP.
        //tap( resp => console.log({tap: resp}) ) // El tap es un operador de RxJS que permite ejecutar una función sin modificar los datos que se reciben de la petición HTTP. En este caso, se utiliza para imprimir en consola la respuesta de la petición HTTP.
        //map((resp) => `Cantidad: ${resp.data.length}`) // El map es un operador de RxJS que permite transformar los datos que se reciben de la petición HTTP. En este caso, se utiliza para imprimir en consola la respuesta de la petición HTTP y luego devolverla para que pueda ser utilizada en el componente que llama a este método.
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

        //TODO: Historial
        tap( items => {
          this.searchHistory.update((history) => ({
            ...history, // El spread operator se utiliza para copiar las propiedades del objeto history en un nuevo objeto, y luego se agrega una nueva propiedad con el nombre de la consulta (query) y el valor de los gifs obtenidos (items). Esto permite mantener el historial de búsquedas sin perder las búsquedas anteriores.
            [query.toLowerCase()]: items,
          }))
        })
      )
    /*.subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      console.log({ search: gifs });
      return gifs;
    });*/
  }

  getHistoryGifs = ( query: string ): Gif[] => this.searchHistory()[query] ?? [];
}
