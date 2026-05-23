// export function whatsMyType( argument: any ): any {
//     return argument;
// }

export function whatsMyTypeSinG( argument: any ): any {
    return argument;
}

let amIStringSinG = whatsMyTypeSinG( 'Hello World' );
let amINumberSinG = whatsMyTypeSinG( 123 );
let amIArraySinG = whatsMyTypeSinG( [1, 2, 3] );

console.log( amIStringSinG.split(' ') )
console.log( amINumberSinG.toFixed() )
console.log( amIArraySinG.join(' - ') )

//Function with generics
export function whatsMyType<T>( argument: T ): T {
    return argument;
}

// let amIString = whatsMyType( 'Hello World' );
let amIString = whatsMyType<string>( 'Hello World' );
// let amINumber = whatsMyType( 123 );
let amINumber = whatsMyType<number>( 123 );
// let amIArray = whatsMyType( [1, 2, 3] );
let amIArray = whatsMyType<number[]>( [1, 2, 3] );

console.log( amIString.split(' ') )
console.log( amINumber.toFixed() )
console.log( amIArray.join(' - ') )