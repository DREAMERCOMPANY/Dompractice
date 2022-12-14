
const d = document,
n = navigator
export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options ={
        enableHightAccuracy : true,
        timeout: 5000,
        maximunAge:0
    };

    const success = (position) =>{
        let coords = position.coords
        console.log(position)
        $id.innerHTML=`
        <p>Tu posicion actual es:</p>
        <ul>
        <li> Latitud:<b>${coords.latitude}</b></li>
        <li>Longitud:<b>${coords.longitude}</b></li>
        <li>Precision:<b>${coords.accuracy}</b> metros </li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en google maps</a>
        `
    }
    const error = (err)=>{
        $id.innerHTML=`<p><mark>${err.code}: ${err.message}</p></mark>`
        console.log(`${err.code}: ${err.message}`)
    }

    n.geolocation.getCurrentPosition(success,error,options)
}

