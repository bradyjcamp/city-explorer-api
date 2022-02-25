'use strict';

const axios = require('axios');


async function getWeather(request, response) {
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
}

class Forecast {
  constructor(day) {
    this.date = day.datetime;
    this.description = day.weather.description;
    this.low = day.low_temp;
    this.high = day.high_temp;
  }
}

module.exports = getWeather;
