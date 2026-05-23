interface Passenger {
    name: string;
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Roberto'
}

const passenger2: Passenger = {
    name: 'Maria',
    children: ['Natalia', 'Gabriel']
}

const printChildren = (passenger: Passenger) => {
    //Se le conoce como optional chaining, es una forma de preguntar si existe la propiedad children, si no existe, no se va a ejecutar el length y no va a dar error, sino que va a devolver undefined
    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children?.length;

    console.log(passenger.name, howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);

const returnChildrenNumber = (passenger: Passenger):number => {
    if (!passenger.children) return 0;
    
    const howManyChildren = passenger.children!.length; 
    // EL nombre de esto es non-null assertion operator, 
    // es una forma de decirle a TypeScript que estamos 
    // seguros de que esta propiedad no es null ni undefined, 
    // entonces podemos usar el operador ! para decirle a 
    // TypeScript que no se preocupe por eso y que confíe en nosotros, 
    // pero hay que tener cuidado con esto porque si realmente la propiedad es null o undefined, 
    // entonces va a dar un error en tiempo de ejecución, 
    // por eso es importante usarlo solo cuando estamos seguros de que la propiedad existe 
    // y no es null ni undefined.

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger1);