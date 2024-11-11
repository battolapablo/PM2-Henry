require("dotenv").config();
const mongoose = require("mongoose");

function dbCon() {
  return mongoose
    .connect(
      "mongodb+srv://pablodferrero:P4fZiaNxjM1fdkmm@battoclips.vjom1.mongodb.net/BattoClips"
    )
    .then(() => {
      console.log("Conexión exitosa a la base de datos");
      console.log(process.env.MONGO_URI);
    })
    .catch((err) => {
      console.error("Error de conexion: ", err);
    });
}

module.exports = dbCon;
