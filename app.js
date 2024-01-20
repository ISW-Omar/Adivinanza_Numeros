let numeroSecreto=0;
let contador=0;
let intentos=5;
let numeroMaximo=3;
let listaNumerosSecretos=[];
mensajesInicio();

function limpiarNumero(){
    document.querySelector('#valorUsuario').value='';
}
function nuevoJuego(){
    contador=0;
    mensajesInicio();
    limpiarNumero();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    return;
}

function mensajesInicio(){
    asignarTextoElemento('h1', 'Adivinanza');
    asignarTextoElemento('p', `Selecciona un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    console.log(numeroSecreto);
}
function verificarIntento(){
    let numeroUsuario= parseInt(document.getElementById('valorUsuario').value);
    //alert(`El numero ingresado es: ${numeroUsuario}`);
    contador++;
    console.log(numeroSecreto===numeroUsuario)
    if(numeroSecreto===numeroUsuario){
        asignarTextoElemento('p',`Acertaste, el número: ${numeroUsuario} es el correcto en ${contador} ${(contador===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
       // alert(`Acertaste, el número: ${numeroUsuario} es el correcto`);
    }else{
        limpiarNumero();
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p',`ERROR: El número secreto es menor`);
        }else{
            asignarTextoElemento('p',`ERROR: El número secreto es mayor`);
        }
    }
    
    return;
}
function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}
function generarNumeroSecreto() {
    let numeroAleatorio=Math.floor(Math.random()*numeroMaximo)+1; 
    if(listaNumerosSecretos.length==numeroMaximo){
        asignarTextoElemento('p',"Ya se generaron todos los números. Recargue pantalla")
    }else{
        if(listaNumerosSecretos.includes(numeroAleatorio)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSecretos.push(numeroAleatorio);
            return numeroAleatorio;
        }
    }
}


