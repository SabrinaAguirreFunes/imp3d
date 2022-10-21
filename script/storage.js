let carrito=[];

// Creacion de funciones para guardar y recuperar el carrito del local storage

const guardarCarritoStorage = (carritoCompras) => {
    localStorage.setItem('carrito', JSON.stringify(carritoCompras));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};
