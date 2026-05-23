import { Component, Input, input } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList {
  characters = input.required<Character[]>();

  listName = input.required<string>();

  /*
    @Input() character: string = '';
 
    @Input() es el decorador clásico de Angular.
    Convierte esta propiedad en un "input" que puede recibir datos del componente padre.
    Se accede como propiedad normal en el template: {{ name }}
 
    <!-- parent.component.html -->
    <!-- Aquí el padre pasa el valor "Roberto" al hijo mediante property binding -->
    <app-child [name]="'Roberto'"></app-child>
  */

  /*
    name = input<string>('');

    // input() es la nueva API basada en Signals (Angular 20+).
    // Convierte la propiedad en un signal de solo lectura.
    // Por eso en el template se accede como función: {{ name() }}
    // Esto hace que sea reactivo automáticamente sin necesidad de ngOnChanges.

    <!-- parent.component.html -->
    <!-- Igual que antes, el padre pasa el valor "Roberto" -->
    <app-child [name]="'Roberto'"></app-child>
  */

}
