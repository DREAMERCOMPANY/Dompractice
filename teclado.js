const d = document
let x=0,
y=0


export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect()//method from DOM
    //console.log(limitsBall,limitsStage)
    //console.log(e.keyCode)
    //console.log(e.key)

    
/* I used "switch" to evaluate each case depending on the
keycode*/
    switch (e.keyCode) {
        case 37: //arrowLeft
            if(limitsBall.left > limitsStage.left){
                e.preventDefault() 
                x--; 
            }
            break;
        case 38: //arrowUp
            
            if(limitsBall.top > limitsStage.top){
                e.preventDefault()
                y--;
            } 
            break;
        case 39://arrowRight
            
            if(limitsBall.right < limitsStage.right){
                e.preventDefault()
                x++;
            } 
            break;
        case 40://arrowDown
            
            if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault()
                y++;
            } 
            break;
    
        default:
            break;
 
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`

}

export function shortcuts(e){
    /* console.log(e.key)
    console.log(e.keyCode)
    console.log(`alt: ${e.altKey}`)
    console.log(`ctrl: ${e.ctrlKey}`)
    console.log(`shift: ${e.shiftKey}`)
    console.log(e.type)
    console.log(e) */



    //creating keyboard shortcuts

    if(e.key==="a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado")
    }

    if(e.key==="c" && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado")
    }

    if(e.key==="p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado")
    }
}

