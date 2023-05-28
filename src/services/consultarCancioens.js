export async function servicioCanciones(){

     const URI="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US"
     const TOKEN= "Bearer BQCykV3GGj3hmNQRNjGPjGlSBer6ia0XofIR7-EkJ6Ihybgq2DqxBn4U2YYsCj8K3uPdzesHkEStacNgl4NEgFNJb_IFxzAzVCAP7GsdKf59CXNDpWc"

     const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let canciones=await respuesta.json()

    return canciones


}