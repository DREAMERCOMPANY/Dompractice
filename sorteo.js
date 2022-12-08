const d = document;
export default function draw(btn,selector){
    const getWinner = (selector)=>{
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length) ,
        winner = $players[random]

        console.log($players,random,winner)

        return `<h4>The winner is: ${winner.textContent}</h4>`

    }

    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            let result = getWinner(selector)
            const $div = d.querySelector(".result-draw")
            $div.innerHTML = result
            //alert(result)
            console.log(result)
        }
    })

    const getWinnerComment = (selector)=>{
        const $players = document.querySelectorAll(selector),
        random = Math.floor(Math.random() *$players.length) ,
        winner = $players[random]

        //console.log($players,random,winner)

        return `El ganador es: ${winner.textContent}`

    }

}