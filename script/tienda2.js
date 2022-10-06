// import { personalizados } from './stock.js'
// import { tradicionales } from './stock.js'

console.log(personalizados);
console.log(tradicionales);

function mostrarPersonalizados(){
    const galeriaPersonalizados=document.getElementById("galeriaPersonalizados");

    for (let personalizado of personalizados){
        let divPersonalizados = document.createElement('div');
        divPersonalizados.className=('imagenesProductos');
        divPersonalizados.innerHTML = `
            <div class="fondoImg">
            <img class="ajusteMedia" src=${personalizado.imagen} alt="figura impresa en 3D de ${personalizado.nombre}">
            <figcaption>${personalizado.nombre}</figcaption>
            </div>`;
        galeriaPersonalizados.appendChild(divPersonalizados);
    }

}

mostrarPersonalizados();

