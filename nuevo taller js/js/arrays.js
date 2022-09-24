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