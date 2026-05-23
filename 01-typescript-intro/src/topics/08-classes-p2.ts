export class Person {
    constructor( 
        // public name: string, 
        public firstName: string, 
        public lastName: string, 
        private address: string = 'No address provided'
    ){}
}

export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person, //Haciendolo 
    ){
        // this.person = new Person(realName);
    }
}

const person = new Person('Bruce', 'Wayne', 'Gotham City');
const ironman = new Hero('Ironman', 45, 'Tony Stark', person);

console.log(ironman);