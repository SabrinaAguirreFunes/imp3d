const piezaGrande = {
    tipoPieza: `Grande`,
    precio: 3000,
}
const piezaMediana = {
    tipoPieza: `Mediana`,
    precio: 1600,
}
const piezaChica = {
    tipoPieza: `Chica`,
    precio: 350,
}

const carrito = [
    {
        nombre: `Loona`,
        tipoPieza: piezaGrande,
        altura: `17cm`,
    },
    {
        nombre: `Legosi`,
        tipoPieza: piezaMediana,
        altura: `12cm`,
    },
    {
        nombre: `Pikachu`,
        tipoPieza: piezaChica,
        altura: `5cm`,
    },
    {
        nombre: `Mew`,
        tipoPieza: piezaChica,
        altura: `5.5cm`,
    },
    {
        nombre: `Bulbasour`,
        tipoPieza: piezaChica,
        altura: `4cm`,
    },
    {
        nombre: `Bakugo`,
        tipoPieza: piezaMediana,
        altura: `14cm`,
    },
    {
        nombre: `Ryuk`,
        tipoPieza: piezaMediana,
        altura: `13cm`,
    },
    {
        nombre: `Eevee`,
        tipoPieza: piezaChica,
        altura: `6cm`,
    },
    {
        nombre: `Batman`,
        tipoPieza: piezaGrande,
        altura: `18cm`,
    },
]

console.log(carrito)

let cantPiezaGrande = 0;
let cantPiezaMediana = 0;
let cantPiezaChica = 0;


for (let i = 0; i < carrito.length; i++){
        if (carrito[i].tipoPieza === piezaGrande){
            cantPiezaGrande = cantPiezaGrande + 1;
        } else if (carrito[i].tipoPieza === piezaMediana){
            cantPiezaMediana = cantPiezaMediana + 1;
        } else if (carrito[i].tipoPieza === piezaChica){
            cantPiezaChica = cantPiezaChica + 1;
        } else 0;
    
}

console.log(`Cantidad de piezas grandes: ${cantPiezaGrande}. Precio unitario: ${piezaGrande.precio}`)
console.log(`Cantidad de piezas medianas: ${cantPiezaMediana}. Precio unitario: ${piezaMediana.precio}`)
console.log(`Cantidad de piezas chicas: ${cantPiezaChica}. Precio unitario: ${piezaChica.precio}`)

const precioTotal = cantPiezaGrande*piezaGrande.precio + cantPiezaMediana*piezaMediana.precio + cantPiezaChica*piezaChica.precio

console.log (`Precio total: $ ${precioTotal}`)