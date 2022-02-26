// 'use strict';

// console.log('Hello World, from our first server!');

// require('dotenv').config();

// const express = require('express');
// const app = express();
// const axios = require('axios');
// const cors = require('cors');
// app.use(cors());
// const PORT = process.env.PORT || 3002;

// const getWeather = require('./weather.js');
// const getMovies = require('./movies.js');


// //creating basic default route for proof of life
// app.get('/', (request, response) => {
//   response.send('Hello, from our server!');
// });

// app.get('/weather', getWeather);
// app.get('/movies', getMovies);


// app.use(errorhandler);
// function errorhandler(error, request, response, next) {
//   response.status(500).send(error.message);
// }

// app.get('*', (request, response) => {
//   response.status(404).send('Route does not exist');
// });

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
