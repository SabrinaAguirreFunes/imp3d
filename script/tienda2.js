// Creacion de tercer categoria de productos mas vendidos

const tradicionalesHT = tradicionales.filter((tradicional) => tradicional.hotTrending === true)

const personalizadosHT = personalizados.filter((personalizado) => personalizado.hotTrending === true)

// Modificacion del DOM para mostrar el catalogo dividido en las categorias correspondientes

function mostrarTradicionales(){
    const galeriaTradicionales=document.getElementById("galeriaTradicionales");

    for (let tradicional of tradicionales){
        let divTradicionales = document.createElement('div');
        divTradicionales.className=('imagenesProductos');
        divTradicionales.innerHTML = `
            <div class="fondoImg">
            <img class="ajusteMedia" src=.${tradicional.imagen} alt="figura impresa en 3D de ${tradicional.nombre}">
            <figcaption>${tradicional.nombre}</figcaption>
            <p>Tamaño: ${tradicional.altura} cm</p>
            <p>Pieza pintada a mano</p>
            <p>Precio: $ ${tradicional.consumo*precioXml}</p>
            <a href="contacto.html"><button>Consultar</button></a>
            <button id="${tradicional.id}Agregar">Agregar al carrito</button>
            </div>`;
        galeriaTradicionales.appendChild(divTradicionales);
    }

}


function mostrarPersonalizados(){
    const galeriaPersonalizados=document.getElementById("galeriaPersonalizados");

    
    for (let personalizado of personalizados){
        let divPersonalizados = document.createElement('div');
        divPersonalizados.className=('imagenesProductos');
        divPersonalizados.innerHTML = `
            <div class="fondoImg">
            <img class="ajusteMedia" src=.${personalizado.imagen} alt="figura impresa en 3D de ${personalizado.nombre}">
            <figcaption>${personalizado.nombre}</figcaption>
            <p>Tamaño: ${personalizado.altura} cm</p>
            <p> Pieza pintada a mano</p>
            <a href="contacto.html"><button>Consultar</button></a>
            </div>`;
        galeriaPersonalizados.appendChild(divPersonalizados);
    }

}


function mostrarHT(){
    const galeriaHT=document.getElementById("galeriaHT");

    for (let tradicional of tradicionalesHT){
        let divTradicionalesHT = document.createElement('div');
        divTradicionalesHT.className=('imagenesProductos');
        divTradicionalesHT.innerHTML = `
            <div class="fondoImg">
            <img class="ajusteMedia" src=.${tradicional.imagen} alt="figura impresa en 3D de ${tradicional.nombre}">
            <figcaption>${tradicional.nombre}</figcaption>
            <p>Tamaño: ${tradicional.altura} cm</p>
            <p> Pieza pintada a mano</p>            
            <p>Precio: $ ${tradicional.consumo*precioXml}</p>
            <a href="contacto.html"><button>Consultar</button></a>
            <button id="${tradicional.id}Agregar">Agregar al carrito</button>
            </div>`;
        galeriaHT.appendChild(divTradicionalesHT);
    }

    for (let personalizado of personalizadosHT){
        let divPersonalizadosHT = document.createElement('div');
        divPersonalizadosHT.className=('imagenesProductos');
        divPersonalizadosHT.innerHTML = `
            <div class="fondoImg">
            <img class="ajusteMedia" src=.${personalizado.imagen} alt="figura impresa en 3D de ${personalizado.nombre}">
            <figcaption>${personalizado.nombre}</figcaption>
            <p>Tamaño: ${personalizado.altura} cm</p>
            <p> Pieza pintada a mano</p>
            <a href="contacto.html"><button>Consultar</button></a>
            </div>`;
        galeriaHT.appendChild(divPersonalizadosHT);
    }

}




mostrarTradicionales();

mostrarPersonalizados();

mostrarHT();
