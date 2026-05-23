/*
    export class Person {
        public name: string;
        // public address: string;
        private address: string;

        constructor(){
            this.name = 'John Doe';
            this.address = '123 Main St';
        }
    }

    const ironman = new Person();
*/

// export class Person {
//     public name: string;
//     private address: string;

//     constructor( name: string, address: string ){
//         this.name = name;
//         this.address = address;
//     }
// }

// const ironman = new Person('Tony Stark', '10880 Malibu Point, Malibu, California');

export class Person { // esto se puede hacer si esta deshabilitada la opción "erasableSyntaxOnly" en tsconfig.json
    // Esta es la version corta de la clase, con el mismo resultado que la versión anterior
    constructor( 
        public name: string, 
        private address: string 
    ){}
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super( realName, 'New York' ) // super() se utiliza para llamar al constructor de la clase padre (Person) y pasarle los argumentos necesarios (realName y 'New York')
    }
}

const ironman = new Hero('Ironman', 45, 'Tony Stark');

console.log(ironman);