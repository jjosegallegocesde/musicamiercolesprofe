import axios from 'axios'

export async function servicioCancionesAxios() {
    const URI = 'https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US';
    const TOKEN = 'Bearer BQCykV3GGj3hmNQRNjGPjGlSBer6ia0XofIR7-EkJ6Ihybgq2DqxBn4U2YYsCj8K3uPdzesHkEStacNgl4NEgFNJb_IFxzAzVCAP7GsdKf59CXNDpWc';
  
    const peticion = {
      headers: {
        Authorization: TOKEN,
      },
    };
  
    try {
      const response = await axios.get(URI, peticion);
      const canciones = response.data;
      return canciones;
    } catch (error) {
      // Manejar errores de solicitud
      console.error(error);
      throw new Error('Error al obtener canciones');
    }
  }