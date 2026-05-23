// interface SuperHero {
//     name: string;
//     age: number;
//     address: {
//         calle: string;
//         pais: string;
//         ciudad: string;
//     };
//     showAddress: () => string;
// }

// const superHero: SuperHero = {
//     name: 'Batman',
//     age: 35,
//     address: {
//         calle: 'Wayne Street',
//         pais: 'Gotham',
//         ciudad: 'Gotham City',
//     },
//     showAddress() {
//         return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
//     }
// }

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

interface Address {
    street: string;
    country: string;
    city: string;
}

const superHero: SuperHero = {
    name: 'Batman',
    age: 35,
    address: {
        street: 'Wayne Street',
        country: 'Gotham',
        city: 'Gotham City',
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHero.showAddress();
console.log(address);

export {};