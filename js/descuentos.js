// const precioOriginal = 120;
// const descuento = 18;



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })


function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento= 100 -descuento;
    
    const precioConDescuento= (precio *porcentajePrecioConDescuento)/100;
    
    return precioConDescuento
    
}

function btnPrecioDescuento() {
    const inputPrecio = document.getElementById("precio");
    const precio = inputPrecio.value;
    const inputDescuento = document.getElementById("descuento");
    const descuento = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(precio,descuento);

    const resultP = document.getElementById("resultadoP");
    resultP.innerText="El precio con descuento son : $"+precioConDescuento;

}