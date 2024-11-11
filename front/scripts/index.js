if (window.location.pathname.includes("Login.html")) {
  const login = require("./login");
  login();
} else if (window.location.pathname.includes("CrearPeli.html")) {
  const crearPeli = require("./crearPeli");
  crearPeli();
} else if (window.location.pathname.includes("Contacto.html")) {
  const contacto = require("./contacto");
  contacto();
} else {
  const renderMovie = require("./renderMovie");
  const botonSearch = require("./botonSearch");
  const filtro = require("./filtro");
  botonSearch();
  filtro();

  const axios = require("axios");
  axios
    .get("http://localhost:3000/movies")
    .then((Response) => {
      const data = Response.data;
      const fragmento = document.createDocumentFragment();
      const cardContainer = document.getElementById("tarjetasContainer");
      data.forEach((movie) => {
        const tarjeta = renderMovie(movie);
        fragmento.appendChild(tarjeta);
      });
      cardContainer.appendChild(fragmento);
    })
    .catch((err) => {
      console.log(err);
    });
}
