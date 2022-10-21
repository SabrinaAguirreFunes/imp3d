// Creacion de variable para el facil cambio de precios de los productos (el cliente determina el precio x ml y cada producto tiene un precio segun el consumo de ml)

const precioXml = 40;

//obtencion de stock desde el json


const obtenerTradicionales = async () => {
    try {
        const response = await fetch("../script/data/stockTradicionales.json");
        const data = await response.json();

        return data;

    } catch (error) {
        console.log('Hubo un error: ', error);
    };
};

const obtenerPersonalizados = async () => {
    try {
        const response = await fetch("../script/data/stockPersonalizados.json");
        const data = await response.json();

        return data;

    } catch (error) {
        console.log('Hubo un error: ', error);
    };
};

