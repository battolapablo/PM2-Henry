const axios = require("axios"); // Importa la biblioteca axios para realizar solicitudes HTTP a APIs externas.

async function allMovies() {
  // Define una función asíncrona que obtiene la lista de películas populares.
  try {
    const response = await axios.get(
      // Realiza una solicitud GET a la API de The Movie Database para obtener películas populares.
      "https://students-api.up.railway.app/movies"
    );
    console.log(response);
    return response.data; // Devuelve solo los resultados de las películas desde la respuesta de la API.
  } catch (error) {
    throw new Error("No se pudo obtener las películas."); // Lanza un error si la solicitud a la API falla.
  }
}

module.exports = {
  allMovies, // Exporta la función allMovies para que pueda ser utilizada en los controladores.
};
