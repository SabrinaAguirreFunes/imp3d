// const piezaRankA = {
//     tipoPieza: `RankA`,
//     precio: 4000,
// }
// const piezaRankB = {
//     tipoPieza: `RankB`,
//     precio: 2100,
// }
// const piezaRankC = {
//     tipoPieza: `RankC`,
//     precio: 500,
// }

// let nombreUsuario = prompt(`Ingrese su nombre:`)

// function bienvenida(){
//     alert(`Bienvenida/o ${nombreUsuario}`)
// }

// bienvenida()

// const catalogo = [
//     {
//         nombre: `Loona`,
//         tipoPieza: piezaRankA,
//         altura: `17cm`,
//     },
//     {
//         nombre: `Legosi`,
//         tipoPieza: piezaRankB,
//         altura: `12cm`,
//     },
//     {
//         nombre: `Pikachu`,
//         tipoPieza: piezaRankC,
//         altura: `5cm`,
//     },
//     {
//         nombre: `Mew`,
//         tipoPieza: piezaRankC,
//         altura: `5.5cm`,
//     },
//     {
//         nombre: `Bulbasour`,
//         tipoPieza: piezaRankC,
//         altura: `4cm`,
//     },
//     {
//         nombre: `Bakugo`,
//         tipoPieza: piezaRankB,
//         altura: `14cm`,
//     },
//     {
//         nombre: `Ryuk`,
//         tipoPieza: piezaRankB,
//         altura: `13cm`,
//     },
//     {
//         nombre: `Eevee`,
//         tipoPieza: piezaRankC,
//         altura: `6cm`,
//     },
//     {
//         nombre: `Batman`,
//         tipoPieza: piezaRankA,
//         altura: `18cm`,
//     },
// ]

// console.log(catalogo)

// let carrito = []

// function cartelSumarPieza(carrito){
//     let piezaParaCarrito = prompt(`Escriba el nombre de la pieza del catalogo que desea agregar al carrito (disponibles: Loona, Legosi, Pikachu, Mew, Bulbasour, Bakugo, Ryuk, Eevee, Batman):`); 
//         if(piezaParaCarrito === `Loona` || piezaParaCarrito === `Legosi` || piezaParaCarrito === `Pikachu` || piezaParaCarrito === `Mew` || piezaParaCarrito === `Bulbasour` || piezaParaCarrito === `Bakugo` || piezaParaCarrito === `Ryuk` || piezaParaCarrito === `Eevee` || piezaParaCarrito === `Batman`){
//             const nuevoElementoCarrito = catalogo.filter(catalogo => catalogo.nombre === piezaParaCarrito)
//             console.log(nuevoElementoCarrito)
//             carrito = carrito.concat(nuevoElementoCarrito)
//             console.log(carrito)
//             cartelSumarOtraPieza(carrito)
//             return carrito
//         }else if(piezaParaCarrito !== `Loona` && piezaParaCarrito !== `Legosi` && piezaParaCarrito !== `Pikachu` && piezaParaCarrito !== `Mew` && piezaParaCarrito !== `Bulbasour` && piezaParaCarrito !== `Bakugo` && piezaParaCarrito !== `Ryuk` && piezaParaCarrito !== `Eevee` && piezaParaCarrito !== `Batman`){
//             cartelSumarPieza(carrito)
//         }
// }

// cartelSumarPieza(carrito)

// function cartelSumarOtraPieza(carrito){
//     let sumarOtraPieza = prompt(`Desea agregar otra pieza al carrito? (Responda S para si, responda N para no)`); 
//         if(sumarOtraPieza === `S`){
//             cartelSumarPieza(carrito)}
//         else if(sumarOtraPieza === `N`){
//             totalCarrito(carrito)}
//         else while(sumarOtraPieza !== `S` && sumarOtraPieza !== `N`){
//             sumarOtraPieza = prompt(`Desea agregar otra pieza al carrito? (Responda S para si, responda N para no)`)
//         }
// }

// function totalCarrito(carrito){
//     let cantPiezaRankA = 0;
//     let cantPiezaRankB = 0;
//     let cantPiezaRankC = 0;

//     for (let i = 0; i < carrito.length; i++){
//             if (carrito[i].tipoPieza.tipoPieza === `RankA`){
//                 cantPiezaRankA = cantPiezaRankA + 1;
//             } else if (carrito[i].tipoPieza.tipoPieza === `RankB`){
//                 cantPiezaRankB = cantPiezaRankB + 1;
//             } else if (carrito[i].tipoPieza.tipoPieza === `RankC`){
//                 cantPiezaRankC = cantPiezaRankC + 1;
//             } else 0;
//     }

//     if(cantPiezaRankA > 0){
//         alert(`Cantidad de piezas Rank A: ${cantPiezaRankA}. Precio unitario: $ ${piezaRankA.precio}`)
//     } else{
//         alert(`No se sumaron piezas Rank A al carrito`)
//     }
    
//     if(cantPiezaRankB > 0){
//         alert(`Cantidad de piezas Rank B: ${cantPiezaRankB}. Precio unitario: $ ${piezaRankB.precio}`)
//     }else{
//         alert(`No se sumaron piezas Rank B al carrito`)
//     }
    
//     if(cantPiezaRankC > 0){
//         alert(`Cantidad de piezas Rank C: ${cantPiezaRankC}. Precio unitario: $ ${piezaRankC.precio}`)
//     }else{
//         alert(`No se sumaron piezas Rank C al carrito`)
//     }


//     const precioTotal = cantPiezaRankA*piezaRankA.precio + cantPiezaRankB*piezaRankB.precio + cantPiezaRankC*piezaRankC.precio

//     alert(`Precio total: $ ${precioTotal}`)

// }









function despedida(){
    alert(`Muchas gracias por tu compra ${nombreUsuario}, que tengas un buen dia. Vuelva pronto.`)
}

despedida()