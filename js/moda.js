const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

const lista1Count ={};
//recorre un arreglo tipo objeto 
lista1.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    }else{
    lista1Count[elemento] = 1;
  }
}
);

//ahora se vuelve a convertir  este objeto en un array de nuevo

const lista1Array = Object.entries(lista1Count).sort(
  function (valorAcumulado,nuevoValor) {
     valorAcumulado - nuevoValor
  }
);
//ahora se utiliza el metodo sort para ordenar
const listaArray1 = Object.entries(lista1Count).sort(
  function(elementoA, elementoB){
      return elementoA[1] -elementoB[1];
  }
);

//ahora declaracmos la moda como la ultima posicion ya ordenda del array de array
 const moda = listaArray1[listaArray1.length -1];