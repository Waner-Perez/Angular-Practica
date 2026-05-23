// let name = 'String';
const name: string = 'String';

// let hpPoints: number = 100;
let hpPoints: number | string = 95; //Para que hpPoints pueda ser un número o una cadena de texto, se utiliza el operador de unión (|) para indicar que puede ser de ambos tipos. Esto permite asignar tanto un número como una cadena a hpPoints sin generar errores de tipo.

hpPoints = 'Full';
hpPoints = 100;

let hpPoints2: number | 'FULL' = 100;
hpPoints2 = 10;

const isAlive: boolean = true;

console.log({
    name,
    hpPoints,
    isAlive
})

export {};