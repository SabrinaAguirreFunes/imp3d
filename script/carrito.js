// Modificacion del DOM para mostrar los productos del carrito actual

function mostrarCarrito (){
    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }

    const carritoContenedor = document.getElementById(`carritoContenedor`);
    for (let producto of carrito){
    const divElementoCarrito = document.createElement('div');
    divElementoCarrito.className=('imagenesProductos');
    divElementoCarrito.innerHTML = `<div class="fondoImg">
        <img class="ajusteMedia" src=.${producto.imagen} alt="figura impresa en 3D de ${producto.nombre}">
        <figcaption>${producto.nombre}</figcaption>
        <p>Tamaño: ${producto.altura} cm</p>
        <p>Pieza pintada a mano</p>
        <p>Precio: $ ${producto.consumo*precioXml}</p>
        <button id="${producto.id}Eliminar">Eliminar producto</button>
        `;
    carritoContenedor.appendChild(divElementoCarrito);
    }
}

mostrarCarrito()

// Agregar funcionalidad a los botones para eliminar productos al carrito

const eliminarProducto = (productoId) => {
    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }

    carrito = carrito.filter(producto => producto.id != productoId);


    guardarCarritoStorage(carrito)

}


for (let producto of carrito){
    let botonEliminar = document.getElementById(`${producto.id}Eliminar`);
    botonEliminar.onclick = () => {
        eliminarProducto(producto.id);
        location.reload();
    }
}


// Modificacion del DOM para mostrar los totales del carrito actual

function totalCarrito (){
    let precioTotal = 0

    for (let producto of carrito){
    precioTotal = precioTotal + producto.consumo*precioXml;
    }

    const carritoTotales = document.getElementById(`carritoTotales`);
    const divCarritoTotales = document.createElement(`div`);
    divCarritoTotales.className = (`totalCarrito`);
    divCarritoTotales.innerHTML = `<p>Cantidad de productos: ${carrito.length}</p>
    <p>Total: $ ${precioTotal}</p>
    <button id="vaciarCarrito">Vaciar carrito</button>`;

    carritoTotales.appendChild(divCarritoTotales);

};

totalCarrito();

// Agregar funcionalidad al boton para eliminar todos los productos del carrito

let botonVaciar = document.getElementById(`vaciarCarrito`);
botonVaciar.onclick = () => {
    vaciarCarrito();
    location.reload();
}

const vaciarCarrito = () => {
    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }

    while (carrito.length != 0){
        for (let i = 0; i < carrito.length; i++){
            carrito.pop();
        }
    }

    guardarCarritoStorage(carrito)

}