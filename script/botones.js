let carrito=[];

// Creacion de funciones para guardar y recuperar el carrito del local storage

const guardarCarritoStorage = (carritoCompras) => {
    localStorage.setItem('carrito', JSON.stringify(carritoCompras));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};


// Agregar funcionalidad a los botones para agregar productos al carrito desde las distintas secciones

const sumarProducto = (productoId) => {

    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }

    const productoAgregado = tradicionales.find(tradicional => tradicional.id === productoId);

    carrito.push(productoAgregado)

    guardarCarritoStorage(carrito)

};

// const sumarProductoHT = (productoId) => {

//     if (localStorage.getItem('carrito')) {
//         carrito = obtenerCarritoStorage();
//     }

//     const productoAgregadoHT = tradicionalesHT.find(tradicional => tradicional.id === productoId);

//     carrito.push(productoAgregadoHT)

//     guardarCarritoStorage(carrito)

// };

for (let tradicional of tradicionalesHT){
    let botonAgregar = document.getElementById(`${tradicional.id}Agregar`);
    botonAgregar.onclick = () => {
        sumarProductoHT(tradicional.id);
        Toastify({
            text: `Se ha agregado ${tradicional.nombre} al carrito`,
            style: {
                background: "linear-gradient(to right, #B17FB1, #813B81)",
            },
            duration: 3000,
            }).showToast();
    }
}

for (let tradicional of tradicionales){
    let botonAgregar = document.getElementById(`${tradicional.id}Agregar`);
    botonAgregar.onclick = () => {
        sumarProducto(tradicional.id);
        Toastify({
            text: `Se ha agregado ${tradicional.nombre} al carrito`,
            style: {
                background: "linear-gradient(to right, #B17FB1, #813B81)",
            },
            duration: 3000
            }).showToast();
    }
}


