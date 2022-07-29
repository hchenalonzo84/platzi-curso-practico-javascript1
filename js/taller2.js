const cupones =[{
    name:"cupon25",
    descuento: 25,
    },
    {name:"cupon50",
    descuento:50,
    },
    {
     name: "cupon75",
    descuento: 75,
    },
    {name:"cupon90",
     descuento: 90,
}
];

function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento= 100 -descuento;
    
    const precioConDescuento= (precio *porcentajePrecioConDescuento)/100;
    
    return precioConDescuento
    
}


function btnPrecioDescuento() {
    const inputPrecio = document.getElementById("precio");
    const precio = inputPrecio.value;
    const inputCupon = document.getElementById("cupon");
    const valorCupon = inputCupon.value;

    const usercuponvalidacion = function (cupons) {
        return cupons.name=== valorCupon;
    };
   
    const usuarioCupon = cupones.find(usercuponvalidacion);
    
    if (!usuarioCupon) {
        alert("el cupon no existe " + valorCupon+ "no es valido")
    } else {       
       const descuento = usuarioCupon.descuento;
        const precioConDescuento = calcularPrecioConDescuento(precio,descuento);
        
        const resultP = document.getElementById("resultadoP");
        resultP.innerText="El precio con descuento son : $"+precioConDescuento;
    }

}