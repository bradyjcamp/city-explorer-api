// 'use strict';

// const axios = require('axios');
// // create an empty object
// // let cache ={};

// async function getWeather(request, response, next) {
//   try {
//     let lat = request.query.lat;
//     let lon = request.query.lon;

//     // create custom key for each route and search result
//     // let key = searchQuery + 'photos';

//     //if the cache exists, AND is valid... send THAT data --is my timestamp longer than.. maybe assign variable for time
//     //if(cache[key] && (Date.now() - cache[key].whatever the timestamp property is < 1000 * 60 * 60 * 24 * 30 * 12)){
//     // console.log('Cache Hit, images present');
//     // res.status(200).send(cache[key].data)
//     //}

//     let forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&days=5&units=I&lat=${lat}&lon=${lon}`;

//     let results = await axios.get(forecastUrl);
//     const weatherArr = results.data.data.map((day) => new Forecast(day));
//     // console.log(weatherArr);
//     response.send(weatherArr);
//   } catch (error) {
//     // throw new Error('weather not working');
//     // response.status(500).send('500, cannot retrieve forecast');
//     next(error);
//   }
// }

// class Forecast {
//   constructor(day) {
//     this.date = day.datetime;
//     this.description = day.weather.description;
//     this.low = day.low_temp;
//     this.high = day.high_temp;
//   }
// }

// module.exports = getWeather;
