'use strict';

console.log('Hello World, from our first server!');

require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const weather = require('./data/weather.json');
const PORT = process.env.PORT || 3002;

//creating basic default route for proof of life
app.get('/', (request, response) => {
  response.send('Hello, from our server!');
});

app.get('/weather', (request, response) => {
  try {
    let searchQuery = request.query.searchQuery;
    // let lat = request.query.lat;
    // let lon = request.query.lon;
    console.log(searchQuery);
    let cityObj = weather.find((city) => city.city_name === searchQuery);
    // console.log(selectedCity);
    const weatherArr = cityObj.data.map((day) => new Forecast(day));
    // console.log(weatherArr);
    response.send(weatherArr);
  } catch (error) {
    // throw new Error('weather not working');
    response.status(500).send('500, something went wrong');
  }
});

class Forecast {
  constructor(day) {
    // this.city_name = cityObj.city_name;
    // this.lat = cityObj.lat;
    // this.lon = cityObj.lon;
    this.date = day.datetime;
    this.description = day.weather.description;
  }
}

app.use(errorhandler);
function errorhandler(error, request, response, next){
  response.status(500).send(error.message);
}

app.get('*', (request, response) => {
  response.status(404).send(
    'Route does not exist'
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

