import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { GifsService } from '../../services/gifs.service';
import { GifsList } from "../../components/gifs-list/gifs-list";

@Component({
  selector: 'app-gif-history',
  imports: [GifsList],
  templateUrl: './gif-history.html',
})
export default class GifHistory {
  gifService = inject(GifsService);

  query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query']))); //El toSignal es una función que se utiliza para convertir un Observable en una señal (signal) en Angular. --- IGNORE ---

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query())); //El computed es una función que se utiliza para crear una señal (signal) que se actualiza automáticamente cada vez que se actualiza la señal query. En este caso, se utiliza para obtener los gifs del historial de búsqueda a partir de la clave de búsqueda (query) y devolverlos como un array de Gif. Esto es útil para mostrar los gifs del historial de búsqueda en el componente.
}