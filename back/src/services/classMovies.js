class classMovie {
  constructor(title, year, director, duration, genre, rate, poster) {
    if (!title || !poster || !director) {
      throw new Error("Titulo, director y URL son obligatorios!");
    }
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

module.exports = classMovie;
