const app = require("./src/server.js"); // Importa la configuración de la aplicación desde el archivo server.js ubicado en la carpeta src.

app.listen(3000, "localhost", () => { // Inicia el servidor en el puerto 3000 y escucha en la dirección 'localhost'.
  console.log("Server listening on http://localhost:3000"); // Muestra un mensaje en la consola indicando que el servidor está activo y funcionando.
});
