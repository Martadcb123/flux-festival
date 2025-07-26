"use strict"

//CARROUSEL

/*Creamos las variables que seleccionan del DOM las etiquetas del carrousel y las funciones
asociadas*/ 

const carrouselCont = document.querySelector(`.carrousel__video`)
const carrouselWrapper = document.querySelector(`.carrousel__video--wrapper`)
const carrouselVid = document.querySelectorAll(`.carrousel__video--vd`)
const carrouselInfo = document.querySelector(`.carrousel__info--wrapper`)
const numVids = carrouselVid.length
const carrouselNext = document.querySelector(`.carrousel__arrow--next`)
const carrouselPrev = document.querySelector(`.carrousel__arrow--prev`)
let contador = 0
const moverCarrousel = ()=>{
       carrouselWrapper.style.translate = `-${ (100 / numVids) * contador }%`
    carrouselInfo.style.translate = `-${ (100 / numVids) * contador }%`
}

//Mostramos por consola para comprobar que no hay errores: 

console.log(carrouselCont)
console.log(carrouselWrapper)
console.log(carrouselVid)
console.log(carrouselInfo)
console.log(numVids)
console.log(carrouselNext)
console.log(carrouselPrev)

// Modificamos los estilos con las variables creadas:

carrouselCont.style.width = `${100 * numVids}%`
carrouselWrapper.style.width = `${100 * numVids}%`
carrouselInfo.style.width = `${100 * numVids}%`
carrouselWrapper.style.gridTemplateColumns = `repeat(${numVids}, 1fr)`
carrouselInfo.style.gridTemplateColumns = `repeat(${numVids}, 1fr)`


// Acciones del carrousel con funciones definidas previamente:

carrouselNext.addEventListener(`click`, ()=>{
    contador++

    if(contador >= numVids){
        contador = 0
    }
    moverCarrousel()

})

carrouselPrev.addEventListener(`click`, ()=>{
    contador--

   moverCarrousel()

} )

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



// HEADER TRANSPARENTE EN LA HOME 

// // Creamos la variable:

const headerBasic = document.querySelector('.header')


// // La mostramos por consola

console.log(headerBasic)


// // Escribimos la acción para que cuando se haga scroll vertical a 700 px cambie la clase creada en CSS:

window.addEventListener(`scroll`, ()=>{
    if(window.scrollY > 700 ){
        headerBasic.classList.add(`isActive`);
    } else{
        headerBasic.classList.remove(`isActive`);
    }
})