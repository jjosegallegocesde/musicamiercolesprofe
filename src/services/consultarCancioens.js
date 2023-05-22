export async function servicioCanciones(){

     const URI="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US"
     const TOKEN= "Bearer BQDE4qBV-qzncUpMkPB6rO9DA9Mf_DjxvfduL4tUdvUokbSydTryIs3l8YDoflOosY0bsjVhppOFqePjM-qsFxbARY0Vmix41A7LkA4JQTEEpjCLL-0"

     const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let canciones=await respuesta.json()

    return canciones


}