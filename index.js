const item1 = 'piezaGrande';
const item2 = 'piezaMediana';
const item3 = 'piezaChica';
const item4 = 'piezaChica';
const item5 = 'piezaChica';
const item6 = 'piezaMediana';
const item7 = 'piezaMediana';
const item8 = 'piezaChica';
const item9 = 'piezaGrande';


let cantPiezaGrande = 0;
let cantPiezaMediana = 0;
let cantPiezaChica = 0;

if(item1 === 'piezaGrande'){
    cantPiezaGrande = cantPiezaGrande + 1;
} else if(item1 === 'piezaMediana'){
    cantPiezaMediana = cantPiezaMediana + 1;
} else if(item1 === 'piezaChica'){
    cantPiezaChica = cantPiezaChica + 1;
} else 0;

if(item2 === 'piezaGrande'){
    cantPiezaGrande = cantPiezaGrande + 1;
} else if(item2 === 'piezaMediana'){
    cantPiezaMediana = cantPiezaMediana + 1;
} else if(item2 === 'piezaChica'){
    cantPiezaChica = cantPiezaChica + 1;
} else 0;

if(item3 === 'piezaGrande'){
    cantPiezaGrande = cantPiezaGrande + 1;
} else if(item3 === 'piezaMediana'){
    cantPiezaMediana = cantPiezaMediana + 1;
} else if(item3 === 'piezaChica'){
    cantPiezaChica = cantPiezaChica + 1;
} else 0;

if(item4 === 'piezaGrande'){
    cantPiezaGrande = cantPiezaGrande + 1;
} else if(item4 === 'piezaMediana'){
    cantPiezaMediana = cantPiezaMediana + 1;
} else if(item4 === 'piezaChica'){
    cantPiezaChica = cantPiezaChica + 1;
} else 0;

if(item5 === 'piezaGrande'){
    cantPiezaGrande = cantPiezaGrande + 1;
} else if(item5 === 'piezaMediana'){
    cantPiezaMediana = cantPiezaMediana + 1;
} else if(item5 === 'piezaChica'){
    cantPiezaChica = cantPiezaChica + 1;
} else 0;

if(item6 === 'piezaGrande'){
    cantPiezaGrande = cantPiezaGrande + 1;
} else if(item6 === 'piezaMediana'){
    cantPiezaMediana = cantPiezaMediana + 1;
} else if(item6 === 'piezaChica'){
    cantPiezaChica = cantPiezaChica + 1;
} else 0;

if(item7 === 'piezaGrande'){
    cantPiezaGrande = cantPiezaGrande + 1;
} else if(item7 === 'piezaMediana'){
    cantPiezaMediana = cantPiezaMediana + 1;
} else if(item7 === 'piezaChica'){
    cantPiezaChica = cantPiezaChica + 1;
} else 0;

if(item8 === 'piezaGrande'){
    cantPiezaGrande = cantPiezaGrande + 1;
} else if(item8 === 'piezaMediana'){
    cantPiezaMediana = cantPiezaMediana + 1;
} else if(item8 === 'piezaChica'){
    cantPiezaChica = cantPiezaChica + 1;
} else 0;

if(item9 === 'piezaGrande'){
    cantPiezaGrande = cantPiezaGrande + 1;
} else if(item9 === 'piezaMediana'){
    cantPiezaMediana = cantPiezaMediana + 1;
} else if(item9 === 'piezaChica'){
    cantPiezaChica = cantPiezaChica + 1;
} else 0;

console.log(cantPiezaGrande)
console.log(cantPiezaMediana)
console.log(cantPiezaChica)

const precioTotal = function(precioPiezaChica, precioPiezaMediana, precioPiezaGrande) {
    return cantPiezaChica*precioPiezaChica + cantPiezaMediana*precioPiezaMediana + cantPiezaGrande*precioPiezaGrande
}

function carrito (precioTotal){
    return `La suma del carrito hasta ahora es $ ${precioTotal}`
}


console.log(carrito(precioTotal(350, 1600, 3000)))

