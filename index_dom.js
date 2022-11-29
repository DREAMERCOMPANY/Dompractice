//import function "hamburguerMenu" from file "menu_hamburguesa.js"
import hamburguerMenu from "./menu_hamburguesa.js";
//two functions are imported; "digitalClock" and "alarm" from the clock.js file
import {digitalClock,alarm } from "./reloj.js"; 
const d = document

d.addEventListener("DOMContentLoaded", e=>{ // document content loaded event is "accessed" and "used" with different functions
    //"hamburguerMenu" function is accessed and its parameters are established
    hamburguerMenu(".panel-btn", ".panel", ".menu a")
    //"digitalClock" function is accessed and its parameters are established
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj") 
    //"alarm" function is accessed and parameters are established
    alarm("./Assets/alarma.mp3","#activar-alarma","#desactivar-alarma")
})



