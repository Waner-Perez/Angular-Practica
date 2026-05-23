import { taxCalculation, type Product } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'iPhone 14',
        price: 899
    },
    {
        description: 'iPad Air',
        price: 599
    },
    {
        description: 'Nokia 3310',
        price: 100
    }
];

const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15,
});

console.log('Total: ', total);
console.log('Tax: ', tax);