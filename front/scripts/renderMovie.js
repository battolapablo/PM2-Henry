function renderMovie(movie) {
  const { title, year, director, duration, genre, rate, poster } = movie;
  const li = document.createElement("li");
  const genresString = genre.join(" ");
  li.className = "tarjeta";
  const crearTarjeta = `
                        <div class="textoTarjetas">
                          <h2>${title}</h2>
                          <h4>Año:</h4>
                          <p>${year}</p>
                          <h4>Director:</h4>
                          <p>${director}</p>
                          <h4>Duración:</h4>
                          <p>${duration}</p>
                          <h4>Género:</h4>
                          <p>${genresString}</p>
                          <h4>IMBD Rate:</h4>
                          <p>${rate}</p>
                          <div class="pie">
                            <a type="button" id="logoVer" href="#">
                              <img id="logoPlay" src="./assets/play.svg" alt="Play">
                            </a>
                            <a type="button" id="logoDescarga" href="#">
                              <img id="logoPlay2" src="./assets/cuadrado.svg" alt="Play2"></a>
                          </div>
                        </div>
                        <div class="cuerpo">
                          <img class="logo2" src="${poster}" alt="${title}">
                        </div>
                      `;
  li.innerHTML = crearTarjeta;

  const logoVer = li.querySelector("#logoVer");
  logoVer.addEventListener("click", function (event) {
    event.preventDefault();
    alert(
      "Este sector se encuentra en mantenimiento, disculpe los inconvenientes."
    );
  });
  const logoDescarga = li.querySelector("#logoDescarga");
  logoDescarga.addEventListener("click", function (event) {
    event.preventDefault();
    alert(
      "Este sector se encuentra en mantenimiento, disculpe los inconvenientes."
    );
  });
  return li;
}

module.exports = renderMovie;
