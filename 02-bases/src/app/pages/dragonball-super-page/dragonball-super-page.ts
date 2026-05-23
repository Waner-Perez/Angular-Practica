import { Component, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-app/character-add";
import { Character } from '../../interfaces/character';

// interface Character {
//   id: number;
//   name: string;
//   power: number;
// }

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
})
export class DragonballSuperPage {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);

  // addCharater() {
  //   if (!this.name() || (!this.power() || this.power() <= 0)) return;
  //   console.log(this.name(), this.power());

  //   const newCharacter: Character = {
  //     id: this.charactersParant().length + 1,
  //     name: this.name(),
  //     power: this.power(),
  //   };

  //   // this.characters().push(newCharacter);
  //   this.charactersParant.update(
  //     list => [...list, newCharacter]
  //   )
  //   this.resetFields();
  // }

  addCharater = (character: Character) => this.characters.update((list) => [...list, character])

  resetFields = () => {
    this.name.set('');
    this.power.set(0);
  }
}
