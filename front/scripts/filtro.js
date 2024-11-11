function filtro() {
  const axios = require("axios");
  const renderMovie = require("./renderMovie");

  document.getElementById("botonFiltro").addEventListener("click", (e) => {
    e.preventDefault();

    const { value: titulo } = document.querySelector(
      'input[aria-label="titulodepelicula"]'
    );
    const { value: year } = document.querySelector('input[aria-label="year"]');
    const { value: director } = document.querySelector(
      'input[aria-label="director"]'
    );
    const { value: genero } = document.getElementById("genero");

    const buildQueryString = () => {
      const params = new URLSearchParams();

      if (titulo) params.append("title", titulo);
      if (year) params.append("year", year);
      if (director) params.append("director", director);
      if (genero && genero !== "Género") params.append("genre", genero);

      return `?${params.toString()}`;
    };

    axios
      .get(`http://localhost:3000/movies/filter${buildQueryString()}`)
      .then((response) => {
        const data = response.data;
        const cardContainer = document.getElementById("tarjetasContainer");
        cardContainer.innerHTML = "";

        if (data.length === 0) {
          const noResultsMessage = document.createElement("p");
          noResultsMessage.textContent =
            "No hay coincidencias con el filtro aplicado.";
          cardContainer.appendChild(noResultsMessage);
        } else {
          const fragmento = document.createDocumentFragment();
          data.forEach((movie) => {
            const tarjeta = renderMovie(movie);
            fragmento.appendChild(tarjeta);
          });
          cardContainer.appendChild(fragmento);
        }
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  });
}

module.exports = filtro;
