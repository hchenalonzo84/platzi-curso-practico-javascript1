console.group("cuadrado");

function perimetroCuadrado (lado){
    return lado *4;
 }
 
 
function areaCuadrado(lado){
    return lado *lado;
    } 
 console.groupEnd();

function calcularPerimetorCuadrado() {
    const ladoCuadrado = document.getElementById("inputCuadrado");
    const valor = ladoCuadrado.value;

    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const ladoCuadrado = document.getElementById("inputCuadrado");
    const valor = ladoCuadrado.value;

    const area = areaCuadrado(valor);
    alert(area);
}

console.group("altura triangulo isoseles")

// function alturaTriangulo(ladoTri1,ladoTri2,baseH) {
    
//     if (ladoTri1 ===ladoTri2 && ladoTri1 !=baseH) {
//         alert('isoceles');

//         const ladoCuadrado = ladoTri*ladoTri;
//         const baseCuadrado = base*base;
    
//         const alturaOperacion = ladoCuadrado -(baseCuadrado/4);
    
//         const alturRaizCuadrada = Math.sqrt(alturaOperacion)
    
//         alert(alturRaizCuadrada);
//     } else {
//         alert('No es triangulo isoceles');
//     } 
    
    // const lados = document.getElementById("ladoTri");
    // const ladoTri = lados.value;
    // const bases = document.getElementById("baseH");
    // const base = bases.value;



// }


function alturaTriangulo(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {


        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        alert(trianguloGrandeAltura);
    }
}

console.groupEnd();