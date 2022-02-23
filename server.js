'use strict';

console.log('Hello World, from our first server!');

const express = require('express');
// must use require instead of import
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());
const weather = require('./data/weather.json');
const PORT = process.env.PORT || 3002;


//creating basic default route for proof of life
app.get('/', (request, response) => {
  response.send('Hello, from our server!');
});

app.get('/weather', (request, response) => {
  let searchQuery = request.query.searchQuery;
  // let lat = request.query.lat;
  // let lon = request.query.lon;
  console.log(searchQuery);
  let cityObj = weather.find(city => city.city_name === searchQuery);
  // let selectedCity = new Forecast(cityObj);
  // console.log(selectedCity);
  const weatherArr = cityObj.data.map(day => new Forecast(day));
  // console.log(weatherArr);
  response.send(weatherArr);
});

class Forecast {
  constructor(day){
    // this.city_name = cityObj.city_name;
    // this.lat = cityObj.lat;
    // this.lon = cityObj.lon;
    this.date = day.datetime;
    this.description = day.weather;
  }
}

app.get('*', (request, response) => {
  response.send('Not sure what you are looking for, but that route does not exist');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

