import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-test',
  imports: [],
  templateUrl: './counter-test.html',
  styleUrl: './counter-test.css',
})
export class CounterTest {
  counter = 10;
  //Uso de signal para mantener el estado del contador de forma reactiva
  counterSignal = signal(10); // Inicializamos el signal con el mismo valor que el contador

  increment = (value: number) =>  {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update(current => current + value); // Actualizamos el signal usando update para evitar problemas de sincronización
  };

  decrease = (value: number) =>  {
    this.counter -= value
    this.counterSignal.update(current => current - value);
  };

  reset = () => {
    this.counter = 0
    this.counterSignal.set(0); // Reseteamos el signal al mismo valor que el contador
  };
}
