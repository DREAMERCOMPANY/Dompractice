//import function "hamburguerMenu" from file "menu_hamburguesa.js"
import scrollTopButton from "./boton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import darktheme from "./dark_mode.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import hamburguerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
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
    responsiveMedia("youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=oaL3RPv-Lfc" target ="_blank" rel = "noopener">Watch video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/oaL3RPv-Lfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    )
    responsiveMedia("gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/hYmMxnRTy27nmSTS7" target ="_blank" rel = "noopener">Watch map</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429176.33072262927!2d-97.01174406690926!3d32.82035249042345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sco!4v1670012834916!5m2!1sen!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
    responsiveTester("responsive-tester")  
    userDeviceInfo("user-device")
    webCam("webcam")
    getGeolocation("geolocation")
    

})


//this event happends for "keysdown"
d.addEventListener("keydown", (e)=>{
    shortcuts(e)
    moveBall(e,".ball",".stage")
})

darktheme(".dark-theme-btn","dark-mode",".ball",".stage")
networkStatus()


