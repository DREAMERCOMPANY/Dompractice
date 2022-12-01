//import function "hamburguerMenu" from file "menu_hamburguesa.js"
import scrollTopButton from "./boton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import hamburguerMenu from "./menu_hamburguesa.js";
//two functions are imported; "digitalClock" and "alarm" from the clock.js file
import {digitalClock,alarm } from "./reloj.js"; 
import { shortcuts } from "./teclado.js";
import { moveBall } from "./teclado.js";

const d = document

d.addEventListener("DOMContentLoaded", e=>{ // document content loaded event is "accessed" and "used" with different functions
    //"hamburguerMenu" function is accessed and its parameters are established
    hamburguerMenu(".panel-btn", ".panel", ".menu a")
    //"digitalClock" function is accessed and its parameters are established
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj") 
    //"alarm" function is accessed and parameters are established
    alarm("./Assets/alarma.mp3","#activar-alarma","#desactivar-alarma")
    countdown("countdown","May 29,2023 11:41:22","Feliz Cumpleaños Dreamer 🐒")
    scrollTopButton(".scroll-top-btn")
})


//this event happends for "keysdown"
d.addEventListener("keydown", (e)=>{
    shortcuts(e)
    moveBall(e,".ball",".stage")
})



