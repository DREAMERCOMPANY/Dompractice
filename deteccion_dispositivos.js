const d = document,
n=navigator,
ua= n.userAgent

export default function userDeviceInfo(id){
    console.log(ua)
    const $id = d.getElementById(id)
     const isMobile ={
        android : ()=> ua.match(/android/i),//busca dento de ua la cadena "android" , no importa si son mayuscular o minusculas
        ios : ()=> ua.match(/iphone|ipad|ipod/i),
        windows : ()=> ua.match(/windows phone/i),
        any: function(){
            return this.android()||this.ios()||this.windows()
        }
     }

     const isDesktop={
        linux:()=>ua.match(/linux/i),
        mac: ()=> ua.match(/mac os/i),
        windows : ()=> ua.match(/windows nt/i),
        any: function(){
            return this.linux() || this.mac() || this.windows()
        }
     }

     const isBrowser={
        chrome: ()=> ua.match(/chrome/i),
        safari: ()=> ua.match(/safari/i),
        firefox: ()=> ua.match(/firefox/i),
        opera: ()=> ua.match(/opera|opera mini/i),
        ie: ()=> ua.match(/msie|iemobile/i),
        edge: ()=> ua.match(/edge/i),
        any: function(){
            return(
                this.chrome()||
                this.safari()||
                this.firefox()||
                this.opera()||
                this.ie()||
                this.edge()
            )
        }
     }

     $id.innerHTML= `
     <ul>
     <li>User agent:<b>${ua}</b></li> <br>
     <li>Plataforma:<b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li> <br>
     <li>Navegador:<b>${isBrowser.any()}</b></li>
     </ul>
     `

     /*Exclusive content*/

     if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`
     }

     if(isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`
     }
     
     if(isDesktop.linux()){
        $id.innerHTML += `<p><mark>Download for linux</mark></p>`
     }

     if(isDesktop.mac()){
        $id.innerHTML += `<p><mark>Download for mac</mark></p>`
     }

     if(isDesktop.windows()){
        $id.innerHTML += `<p><mark>Download for windows</mark></p>`
     }

     /*redirections*/
     
     /* if(isMobile.android()){
        window.location.href = "https://platzi.com"

     } */
}