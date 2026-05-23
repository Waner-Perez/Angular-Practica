interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//En vez de hacer esto
// console.log('Song: ', audioPlayer.song);
console.log('Author: ', audioPlayer.details.author);

//Podemos hacer esto se le llama destructuring, 
// es una forma de extraer propiedades de un objeto 
// y asignarlas a variables

const { song } = audioPlayer;

// console.log('Song: ', song);

//Si queremos cambiar el nombre de la variable, podemos hacer esto
// const { 
//     song:anotherSong, 
//     songDuration:duration, 
//     details: { author } 
// } = audioPlayer; 

const { // otra forma para extraer propiedades de un objeto que se encuentra dentro de otro objeto
    song:anotherSong, 
    songDuration:duration, 
    details
} = audioPlayer; 

const { author } = details;

// console.log('Another Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

//Destructuring en arrays

// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

// console.error('Personaje 3: ', dbz[1] || 'No se encontró el personaje'); 

// const [p1, p2, p3]: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3 = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.error('Personaje 3: ', p3);

export {};