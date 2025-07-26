"use strict"

//MENÚ HAMBURGUESA:

// Creamos el javascript para que funcione el menú tipo hamburguesa:

const headerMenu = document.querySelector(`.header__nav--menu`)
const headerUl = document.querySelector(`.header__ul`)

// Mostramos por consola:

console.log(headerMenu)
console.log(headerUl)

//Ejecutamos la función:

headerMenu.addEventListener(`click`, ()=>{
    headerUl.classList.toggle(`isVisible`)
})

