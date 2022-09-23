const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafoClase = document.querySelector('.parrafoClase');
const parradoId = document.querySelector('#parrafoId');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafoClase,
    parradoId,
    input
});

h1.innerText = 'patito <br> feo';
// console.log(h1.getAttribute('class '));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');
input.value = "456";
// input.placeholder = "prueba"

const img = document.createElement('img');

img.setAttribute('src','./img/genshing.png');
img.setAttribute('width', '270');
img.setAttribute('height','175');
console.log(img);
parradoId.innerHTML = "";
parradoId.append(img);

const input1 = document.querySelector("#calculo1");
const input2= document.querySelector("#calculo2");
const botonCalcular = document.querySelector("#btnCalcular");
const presult = document.querySelector("#resultado");

function btnOnclick() {
 const sumaInputs = parseInt(input1.value) + parseInt( input2.value);
 presult.innerText = "El resultado es: " + sumaInputs 
}

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btnCal2 = document.querySelector("#btnCal2");
const presult2 = document.querySelector("#resultado2");
btnCal2.addEventListener('click',function () {
    const sumaInputs2 = parseInt(num1.value) + parseInt( num2.value);
    presult2.innerText = "El resultado es: " + sumaInputs2 
});

const entrada1 = document.querySelector("#entrada1");
const entrada2 = document.querySelector("#entrada2");
const botonFormulario = document.querySelector("#botonFormulario");
const presult3 = document.querySelector("#resultado3");
const formulario1 = document.querySelector("#formulario1");

formulario1.addEventListener('submit', function (event) {
    console.log({event});
    event.preventDefault();
    const sumaForm = parseInt(entrada1.value)+ parseInt(entrada2.value);
    presult3.innerText = "eL RESULTADO ES:" + sumaForm;
});