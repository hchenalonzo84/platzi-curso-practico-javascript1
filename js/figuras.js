//codigo para el cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;

console.log('los lados del cuadrado miden: ' + ladoCuadrado);

const perimetro = ladoCuadrado *4;

console.log('el permitetro del cuadrado es:'+ perimetro + ' unidades');

const area = ladoCuadrado* ladoCuadrado;
console.log('el area del cuadrado es: '+ area + 'unidades cuadradas');

console.groupEnd();

// codigo para el triangulo
console.group("triangulo");
const ladotrianquilo1 = 6;
const ladotrianquilo2 = 6;
const base = 4;
const altura=5.5;
console.log('los lados del triangulo mider: '+ ladotrianquilo1 + ' cm '+ ladotrianquilo2 + ' cm '+ base + ' cm');


console.log("la altura del triangulo es: " +altura);

const periTrian = ladotrianquilo1+ladotrianquilo2+base;
console.log("el permitro del triangulo es : "+periTrian+" cm");

const areaTrin = (base*altura)/2;
console.log("el area del trangulo es : "+areaTrin+" cm2");
console.groupEnd();

//codigo  del circulo
console.group("circulo");

//variable radio
const radioCirculo = 4;
console.log("el radio del circulo es : "+radioCirculo)
//variable diametro
const diametro= radioCirculo*2;
console.log("el diametro del circulo es : "+diametro)

//variable pi
const PI= Math.PI;
console.log("PI es : "+ PI)

// circunferecnia
const periCircunferencia = diametro*PI;
console.log("la circunferencia del circulo es : "+periCircunferencia)

//area
const areaCir= (radioCirculo*radioCirculo)*PI;
console.log("el area del circulo es : "+areaCir);

console.groupEnd();
