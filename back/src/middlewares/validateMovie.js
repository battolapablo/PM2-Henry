const mongoose = require("mongoose");

function validateMovieData(req, res, next) {
  try {
    const movie = req.body;
    console.log(movie);
    if (
      !movie.title ||
      !movie.year ||
      !movie.director ||
      !movie.duration ||
      !movie.genre ||
      !movie.rate ||
      !movie.poster
    ) {
      throw Error("Te faltaron algunos datos");
    } else {
      next();
    }
  } catch (err) {
    throw Error(err.message);
  }
}

module.exports = validateMovieData;
