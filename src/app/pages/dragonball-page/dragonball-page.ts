import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [
    // NgClass
  ],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css',
})
export class DragonballPage {

  // characters = signal([])

  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8500 },
    // { id: 3, name: 'Gohan', power: 7000 },
    // { id: 4, name: 'Piccolo', power: 3000 },
    // { id: 5, name: 'YanCha ', power: 500 },
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true
  //   }
  // })

  addCharater() {
    if (!this.name() || (!this.power() || this.power() <= 0)) return;
    console.log(this.name(), this.power());

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    // this.characters().push(newCharacter);
    this.characters.update(
      list => [...list, newCharacter]
    )
    this.resetFields();
  }

  resetFields = () => {
    this.name.set('');
    this.power.set(0);
  }
}
