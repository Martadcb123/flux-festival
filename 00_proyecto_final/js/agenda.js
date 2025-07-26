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


//ACORDEÓN AGENDA

//Definimos la variable común a todo el documento: 

const bloques = document.querySelectorAll(`.agenda__bloque`)

//La mostramos por consola:

console.log(bloques)

//Ejecutamos la función:

bloques.forEach((_, i)=>{
    bloques[i].addEventListener(`click`, ()=>{
        bloques[i].classList.toggle(`active`)
    })
})
