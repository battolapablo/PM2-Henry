const { allMovies } = require("../services/moviesService"); // Importa la función allMovies desde el archivo moviesService.js.

async function allMovieController(request, response) {
  // Define el controlador para manejar las solicitudes GET en /movies.
  try {
    const data = await allMovies(); // Llama a la función del servicio allMovies para obtener los datos de las películas.
    response.json(data); // Envía los datos obtenidos en formato JSON como respuesta al cliente.
  } catch (error) {
    response.status(500).json({ message: error.message }); // Si ocurre un error, responde con un mensaje de error y el código de estado 500 (Error interno del servidor).
  }
}

module.exports = {
  allMovieController, // Exporta la función allMovieController para que pueda ser utilizada en las rutas.
};
