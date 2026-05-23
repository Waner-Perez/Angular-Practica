// function addNumbers(a: number, b: number) {
//     return a + b;
// }

/*
function addNumbers(a: number, b: number): number { // especificamos el tipo de retorno de la función
    return a + b;
}

const result: number = addNumbers(5, 10); 

const addNumbersArrow = (a: number, b: number): string => { 
    // return (a + b).toString();
    return `${a + b}`;
}

const result2: string = addNumbersArrow(5, 10); 

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) { // el signo de interrogación indica que el parámetro es opcional, y el valor por defecto se asigna a base
    return firstNumber * base;
}

const multiplyResult: number = multiply(5);

console.log({ result, result2, multiplyResult });
*/

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 10,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

healCharacter(strider, 25)

strider.showHp();

export {};