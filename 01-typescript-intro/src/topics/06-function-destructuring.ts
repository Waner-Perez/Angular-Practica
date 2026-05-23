export interface Product {
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'IPhone 14 Pro',
//     price: 999
// }

// const tablet: Product = {
//     description: 'IPad Air',
//     price: 599
// }

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

/*
    function taxCalculation(options: TaxCalculationOptions): number[] {
        let total = 0;
        
        // options.products.forEach( product => (total += product.price) );
        // options.products.forEach( product => { total += product.price } )

        // Destructuring en funciones, es una forma de extraer propiedades de un objeto que se encuentra dentro de otro objeto
        // options.products.forEach( ({ price }) => (total += price) );
        options.products.forEach( ({ price }) => {total += price} );


        return [total, total * options.tax];
    } 
*/

/*
    function taxCalculation(options: TaxCalculationOptions): [number, number] { // El [number, number] indica que la función devuelve una tupla con dos números, el total y el total con impuestos y limita el tipo de retorno a una tupla con dos números, lo que hace que el código sea más claro y fácil de entender.
        let total = 0;

        options.products.forEach( ({ price }) => {total += price} );

        return [total, total * options.tax];
    } 
*/

// function taxCalculation({ tax, products }: TaxCalculationOptions): [number, number] {
export function taxCalculation( options: TaxCalculationOptions ): [number, number] { // El [number, number] indica que la función devuelve una tupla con dos números, el total y el total con impuestos y limita el tipo de retorno a una tupla con dos números, lo que hace que el código sea más claro y fácil de entender.
    const { tax, products } = options;
    
    let total = 0;

    products.forEach( ({ price }) => {total += price} );

    return [total, total * tax];
} 

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const result = taxCalculation({
//     products: shoppingCart,
//     tax: tax
//     // tax
// })

// console.log('Total: ', result[0]);
// console.log('Tax: ', result[1]);

//Destructuring en funciones

// const [total, taxTotal] = taxCalculation({
//     products: shoppingCart,
//     tax: tax
// })

// console.log('Total: ', total);
// console.log('Tax: ', taxTotal);

// export {};