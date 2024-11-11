const express = require("express"); // Importa el módulo express para crear el enrutador.
const router = express.Router(); // Crea una instancia de enrutador de express para manejar rutas específicas.
const { allMovieController } = require("../controllers/movieController"); // Importa el controlador allMovieController desde movieController.

router.get("/movies", allMovieController);
// Define una ruta GET para "/movies" y asigna la función controladora allMovieController para manejar las solicitudes.

module.exports = router; // Exporta el enrutador para que pueda ser utilizado en la configuración principal del servidor (server.js).
