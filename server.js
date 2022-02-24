'use strict';

console.log('Hello World, from our first server!');

require('dotenv').config();

const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3002;

//creating basic default route for proof of life
app.get('/', (request, response) => {
  response.send('Hello, from our server!');
});

app.get('/weather', async (request, response) => {
  try {
    let lat = request.query.lat;
    let lon = request.query.lon;
    let forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&days=5&units=I&lat=${lat}&lon=${lon}`;

    let results = await axios.get(forecastUrl);
    const weatherArr = results.data.data.map((day) => new Forecast(day));
    // console.log(weatherArr);
    response.send(weatherArr);
  } catch (error) {
    // throw new Error('weather not working');
    response.status(500).send('500, cannot retrieve forecast');
  }
});

class Forecast {
  constructor(day) {
    this.date = day.datetime;
    this.description = day.weather.description;
    this.low = day.low_temp;
    this.high = day.high_temp;
  }
}

app.get('/movies', async (request, response) => {
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
});

class Movies {
  constructor(movie) {
    this.title = movie.original_title;
    this.overview = movie.overview;
    this.rating = movie.vote_average;
    this.votes = movie.vote_count;
    this.release = movie.release_date;
  }
}

app.use(errorhandler);
function errorhandler(error, request, response, next) {
  response.status(500).send(error.message);
}

app.get('*', (request, response) => {
  response.status(404).send('Route does not exist');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
