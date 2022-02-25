'use strict';

const axios = require('axios');

async function getMovies (request, response) {
  try {
    let nameOfCity = request.query.nameOfCity;
    let movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${nameOfCity}`;

    let movieResults = await axios.get(movieUrl);
    const movieArr = movieResults.data.results.map(
      (movie) => new Movies(movie)
    );
    console.log(movieArr);
    response.send(movieArr);
  } catch (error) {
    response.status(500).send('500, cannot retrieve movies');
  }
}

class Movies {
  constructor(movie) {
    this.title = movie.original_title;
    this.overview = movie.overview;
    this.rating = movie.vote_average;
    this.votes = movie.vote_count;
    this.release = movie.release_date;
  }
}

module.exports = getMovies;
