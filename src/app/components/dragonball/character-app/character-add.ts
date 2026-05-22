import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  standalone: true, // Esto hace que el componente sea independiente y no necesite ser declarado en ningún módulo
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  //------------------Uso de @Output()

  /*
    @Output() message = new EventEmitter<string>(); 
    // @Output = decorador clásico, usa EventEmitter para enviar datos al padre

    sendMessage = () => this.message.emit('Hola desde el hijo');

    <!-- parent.component.html -->
    <app-child (message)="onMessage($event)"></app-child>
    <p>{{ received }}</p>

    // parent.component.ts
    received = '';
    onMessage = (msg: string) => this.received = msg;
  */

  //------------------Uso de output()
  /*
    message = output<string>(); 
    // output() = nueva API basada en Signals, más tipada y reactiva

    sendMessage() {
      this.message.emit('Hola desde el hijo');
    }

    <!-- parent.component.html -->
    <app-child (message)="onMessage($event)"></app-child>
    <p>{{ received }}</p>

    // parent.component.ts
    received = '';
    onMessage(msg: string) {
      this.received = msg;
    }

  */

  // charactersParant = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 8500 },
  // ]);

  addCharater() {
    if (!this.name() || (!this.power() || this.power() <= 0)) return;
    console.log(this.name(), this.power());

    const newCharacter: Character = {
      // id: this.charactersParant().length + 1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    // this.characters().push(newCharacter);
    // this.charactersParant.update(
    //   list => [...list, newCharacter]
    // )

    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields = () => {
    this.name.set('');
    this.power.set(0);
  }
}
