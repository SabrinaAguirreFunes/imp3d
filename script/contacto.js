let formularioConsultas = document.getElementById("formularioConsultas")

formularioConsultas.addEventListener("submit", ingresarConsulta);

function ingresarConsulta(e){
    e.preventDefault();
    let nombre = document.getElementById("nombreC").value;
    console.log(nombre);
    let email = document.getElementById("emailC").value;
    console.log(email);
    let textoConsulta = document.getElementById("textoConsulta").value;
    console.log(textoConsulta);
    let masInfo = document.getElementById("gridCheck1").value;
    console.log(masInfo);
}

let formularioPedidos = document.getElementById("formularioPedidos")

formularioPedidos.addEventListener("submit", ingresarPedido);

function ingresarPedido(e){
    e.preventDefault();
    let nombre = document.getElementById("nombreP").value;
    console.log(nombre);
    let email = document.getElementById("emailP").value;
    console.log(email);
    let textoPedido = document.getElementById("textoPedido").value;
    console.log(textoPedido);
    let sinPintar = document.getElementById("sinPintar").value;
    console.log(sinPintar);
    let pintada = document.getElementById("pintada").value;
    console.log(pintada);
    let tamanio = document.getElementById("tamanio").value;
    if(tamanio == 1){
        console.log("Chica (hasta 10cm)");
    }else if(tamanio == 2){
        console.log("Mediana (hasta 15cm)");
    }else if(tamanio == 3){
        console.log("Grande (hasta 20cm)");
    }    
    let masInfo = document.getElementById("gridCheck1").value;
    console.log(masInfo);
}