const express = require("express"); // Importa el módulo express para crear el servidor.
const app = express(); // Crea una instancia de la aplicación express.
const router = require("./routes/movieRouter"); // Importa el enrutador que maneja las rutas relacionadas con películas desde el archivo movieRouter.
const morgan = require("morgan"); // Importa el middleware morgan para registrar las solicitudes HTTP en la consola.
const cors = require("cors"); // Importa el middleware CORS para permitir solicitudes de diferentes orígenes (cross-origin).

app.use(morgan("dev")); // Usa el middleware morgan en modo 'dev', lo que registra detalles de cada solicitud entrante en la consola.
app.use(cors()); // Usa el middleware CORS para permitir que la API acepte solicitudes desde otros dominios.
app.use(express.json()); // Usa el middleware express.json para que la aplicación pueda procesar solicitudes con cuerpo en formato JSON.

app.use(router); // Usa el enrutador importado para manejar las rutas relacionadas con películas.

module.exports = app; // Exporta la instancia de la aplicación para que pueda ser utilizada en otros archivos, como en server.js.
