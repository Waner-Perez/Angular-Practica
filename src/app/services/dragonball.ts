import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 8500 },
  // ]);

  characters = signal<Character[]>(loadFromLocalStorage());

  //Uso de Efectos secundarios para guardar en localStorage
  //Los effect sirven para ejecutar código cada vez que una señal cambia, sin necesidad de suscribirse a ella
  saveToLocalStorage = effect(() => {
    // console.log(`Characters count ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters())) 
    //Guardamos en localStorage cada vez que cambia la señal de characters, tambien se debe de tener en cuenta que el localStorage solo guarda strings, por lo que se debe de convertir el array de characters a string con JSON.stringify
  })

  addCharater = (character: Character) => this.characters.update((list) => [...list, character])
}
