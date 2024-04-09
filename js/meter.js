// === MODO ESTRICTO === //
"use strict";

// === ELEMENTOS DEL DOM === //
let spanValorUsoCpu;
let meterUsoCpu;
let buttonIniciarMedidorCpu;
let spanValorUsoRam;
let divUsoRam;
let buttonIniciarMedidorRam;

// === EVENTOS === //
window.addEventListener("load", init, false);

// === METODOS === //

// Funcion init
function init() {
    // Vincula las variables a los elementos del DOM
    spanValorUsoCpu = document.getElementById("span-valor-uso-cpu");
    meterUsoCpu = document.getElementById("meter-uso-cpu");
    buttonIniciarMedidorCpu = document.getElementById("button-iniciar-medidor-cpu");
    spanValorUsoRam = document.getElementById("span-valor-uso-ram");
    divUsoRam = document.getElementById("div-uso-ram");
    buttonIniciarMedidorRam = document.getElementById("button-iniciar-medidor-ram");

    // Anyade la escucha de eventos
    buttonIniciarMedidorCpu.addEventListener("click", function() {
        setInterval(function() { actualizarMedidorCpu() }, 3000);
    }, false);
    buttonIniciarMedidorRam.addEventListener("click", function() {
        setInterval(function() { actualizarMedidorRam() }, 3000);
    }, false);
}

/** 
 * Actualiza el medidor de CPU anyadiendo al valor actual +5.
 * 
 * Si se sobrepasa, el valor actual sera el valor minimo del rango.
 * */
function actualizarMedidorCpu() {
    let valorActual = parseFloat(meterUsoCpu.getAttribute("value"));
    let valorMaxRango = parseFloat(meterUsoCpu.getAttribute("max"));
    let valorMinRango = parseFloat(meterUsoCpu.getAttribute("min"));

    // Incrementa el valor actual en +5
    valorActual += 5;

    // Comprueba si el valor actual es mayor al rango
    if (valorActual > valorMaxRango) {
        valorActual = valorMinRango;
    }

    // Anyade el valor al medidor
    spanValorUsoCpu.innerHTML = valorActual;
    meterUsoCpu.setAttribute("value", valorActual);
    meterUsoCpu.setAttribute("aria-valuenow", valorActual);
}

/** 
 * Actualiza el medidor de RAM anyadiendo al valor actual +5.
 * 
 * Si se sobrepasa, el valor actual sera el valor minimo del rango.
 * */
function actualizarMedidorRam() {
    let valorActual = parseFloat(divUsoRam.getAttribute("aria-valuenow"));
    let valorMaxRango = parseFloat(divUsoRam.getAttribute("aria-valuemax"));
    let valorMinRango = parseFloat(divUsoRam.getAttribute("aria-valuemin"));
    let rect = document.getElementById("rect-svg-meter");

    // Incrementa el valor actual en +5
    valorActual += 5;

    // Comprueba si el valor actual es mayor al rango
    if (valorActual > valorMaxRango) {
        valorActual = valorMinRango;
    }

    // Anyade el valor al medidor
    spanValorUsoRam.innerHTML = valorActual;
    divUsoRam.setAttribute("aria-valuenow", valorActual);
    rect.setAttribute("width", valorActual + "%");
}
