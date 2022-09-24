 ¿Que es un array?

 es una lista de elementos.
const array = [1,'jajaja', true, flase, {nombre: 'lala', edad: 4}];

¿Que es un objeto?
 es una lista de elementos, pero cada elemento tiene un nombre clave.
const obj = {
    nombre: 'Fulanito',
    edad: 3,
    comidaFavorita: ['pollo frito','vegetales'],
};
¿Cuando es mejor usar objetos o arrays?

arrays cuando lo que haremos en un elemento es lo 
mismo que en todos los demas(la regla se puede incumplir), Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algorimo.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
si. los arrays pueden guardar objetos. y los objetos pueden guardar arrays entre sus propiedades.

Ejercicio 1.

crea una funcion que pueda recibir cualquier array como parametgro e imprima su primer elemento

//Respuesta
function imprimirPrimerElementoArray(arr) {
    console.log(arr[0]);
}

imprimirPrimerElementoArray(['hugo','juanma','diego']);

ejercicio 2. 

Crea una funcion que pueda recibir como parametro cualquier array como aprametro e imprima sus elementos uno por uno ( nos e vale imprimir el array completo)

const obj = {
    nombre: 'Fulanito',
    edad: 3,
    comidaFavorita: ['pollo frito','vegetales'],
};

function imprimirPrimerElementoPorelemento(obj) {
    const arr = Object.values(obj);
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(element);
        
    }
}

imprimirPrimerElementoPorelemento(obj);
