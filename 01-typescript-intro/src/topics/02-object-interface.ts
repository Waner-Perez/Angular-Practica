// let skills = ['Bash', 'Counter', 'Healing', true, 1234];
const skills: string[] = ['Bash', 'Counter', 'Healing']; //Para tipar un array de strings

/**
    No se puede tipar un objeto de esta forma, 
    ya que no se le asigna un tipo a cada propiedad, 
    por lo que TypeScript no puede inferir el tipo de cada propiedad y 
    se asigna el tipo 'any' a cada una de ellas, 
    lo que puede llevar a errores en tiempo de ejecución. 
*/

// const strider = {    
//     name: 'Strider',
//     hp: 100,
//     skills: ['Bash', 'Counter']
// }

//Para tipar un objeto, se puede usar una interface o un type alias.

interface Charecter {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Charecter = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Windfall Island';

console.table(strider);

export {};