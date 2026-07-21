import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  // imports: [GifsList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage implements AfterViewInit {
  gifService = inject(GifsService);
  scrollStateService = inject(ScrollStateService)

  // scrollDivRef = viewChild('groupDiv');
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }
  
  onScroll = (event: Event) => {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if(!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop; // La cantidad de píxeles que se han desplazado desde la parte superior del div
    const clientHeight = scrollDiv.clientHeight; // La altura visible del div, es decir, la cantidad de píxeles que se pueden ver dentro del div sin desplazarse
    const scrollHeight = scrollDiv.scrollHeight; // La altura total del contenido del div, incluyendo la parte que no es visible debido al desplazamiento

    // debugger;

    // console.log({ scrollTop, clientHeight, scrollHeight });
    // console.log({ scrollTotal: scrollTop + clientHeight, scrollHeight });

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    // console.log({isAtBottom})
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if(isAtBottom){
      this.gifService.loadTrendingGifs();
    }
  }
}

/* 
  El viewChild es una función que se utiliza para 
  obtener una referencia a un elemento del DOM en el 
  template. En este caso, se utiliza para obtener una 
  referencia al div que contiene los grupos de gifs. 
  La referencia se almacena en la propiedad scrollDivRef, 
  que luego se puede utilizar para acceder al elemento del 
  DOM y realizar acciones sobre él, como agregar un event 
  listener para el evento de scroll. 
*/

/* 
  viewChildren es similar a viewChild, pero se utiliza para 
  obtener referencias a múltiples elementos del DOM que coinciden 
  con un selector. En lugar de devolver una sola referencia, 
  devuelve una lista de referencias a los elementos que coinciden 
  con el selector. Esto es útil cuando se desea trabajar con varios 
  elementos del DOM que tienen la misma clase o etiqueta, por ejemplo. 
  En este caso, se podría utilizar viewChildren para obtener referencias 
  a todos los divs que contienen los grupos de gifs, en lugar de solo uno.
*/