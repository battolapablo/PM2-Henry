const axios = require("axios");
const validacion = require("./validacion");
const renderMovie = require("./renderMovie");

function crearPeli() {
  document
    .getElementById("needs-validation")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      if (!validacion()) {
        return;
      }

      const formData = Object.fromEntries(new FormData(event.target));
      console.log(new FormData(event.target))
      formData.genre = formData.genre.split(",");
      formData.genre.map((element) => {
        return element.trim();
      });
      const main = async () => {
        try {
          const response = await axios.post(
            "http://localhost:3000/movies",
            formData
          );
          renderMovie(response.data.movie);
          const successMessage = document.getElementById("success-message");
          successMessage.style.display = "block";
          setTimeout(() => {
            successMessage.style.display = "none";
          }, 7000);
        } catch (error) {
          console.error("Error al agregar la película:", error);
        }
      };
      main();
    });

  document
    .getElementById("clear-fields")
    .addEventListener("click", function () {
      const form = document.getElementById("needs-validation");
      form.reset();
      Array.from(form.elements).forEach((input) => {
        input.classList.remove("is-invalid");
      });
    });
}
module.exports = crearPeli;

