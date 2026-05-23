import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  name = signal('Ironman');
  age = signal(45);

  //uso de signal con computed para crear una propiedad que dependa de otras señales
  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  })

  // getHeroDescription() {
  //   // return this.name() + this.age(); // Concatenamos el nombre y la edad del héroe para obtener una descripción completa
  //   return `${this.name()} - ${this.age()}`
  // }

  changeHero = () => {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeEdad = () => this.age.set(60);

  resetForm = () => {
    this.name.set('Ironman');
    this.age.set(45);
  }

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  })
}
