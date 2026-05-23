import { Component } from "@angular/core";

@Component({
    template: `
        <h1>Counter {{ counter }}</h1>
        <button (click)="increment(1)">+1</button>
        <button (click)="increment(1)">+1</button>
        <button (click)="increment(1)">+1</button>
    `,
    styles: `
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `
})
export class CounterPage {
    counter = 10;

    increment(value: number) {
        this.counter += value;
    }
}