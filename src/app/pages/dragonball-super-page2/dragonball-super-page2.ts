import { Component, inject, signal } from '@angular/core';
import { Character } from '../../interfaces/character';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-app/character-add';
import { DragonballService } from '../../services/dragonball';

@Component({
  selector: 'app-dragonball-super-page2',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page2.html',
  styleUrl: './dragonball-super-page2.css',
})
export class DragonballSuperPage2 {
  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 8500 },
  // ]);

  // addCharater = (character: Character) => this.characters.update((list) => [...list, character])

  // constructor(
  //   public dragonBallService: DragonballService
  // ) {}

  public dragonBallService = inject(DragonballService);
}
