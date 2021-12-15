let carrito = [];

let titTotalCompra = document.createElement("h1");
titTotalCompra.innerText = "Total de tu compra $";
document.body.appendChild(titTotalCompra);

let montoTotalCompra = document.createElement("h1");
montoTotalCompra.innerText = "0";
document.body.appendChild(montoTotalCompra);

let titCantProductos = document.createElement("h1");
titCantProductos.innerText = "Cantidad de Productos en el Carro";
document.body.appendChild(titCantProductos);

let cantProductos = document.createElement("h1");
cantProductos.innerText = "0";
document.body.appendChild(cantProductos);

let botonFinalizar = document.createElement("button");
botonFinalizar.innerText = "Finalizar Compra";
document.body.appendChild(botonFinalizar);

botonFinalizar.onclick = () => {
    const precioFinal = montoTotalCompra.innerText;
    alert("Ending purchase")
}

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h2> ID: ${producto.id}</h2>
    <p> Nombre: ${producto.nombre}</p>
    <img src="${producto.foto}">
    <h2> Precio $ ${producto.precio}</h2>
    <button id="${producto.id}">Buy</button>`;
    document.body.appendChild(contenedor);
    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarro(`${producto.id}`); 
}

function agregarAlCarro(miId){
    carrito.push(productos[miId - 1]);
    console.log(carrito);
    localStorage.setItem("carritoRustico", JSON.stringify(carrito));
    calcularTotalCarrito();
}

function calcularTotalCarrito(){
    let total = 0;
    for (const prodEnCarro of carrito) {
        total += prodEnCarro.precio;
        console.log(total);
    }
    montoTotalCompra.innerText = total;
    cantProductos.innerText = carrito.length;
} 