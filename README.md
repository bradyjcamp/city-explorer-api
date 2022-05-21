# City Explorer API

**Author**: Brady Camp
**Version**: 1.0.0

## Overview

This application is the server for City Explorer. It will import information from the weatherbit API and others to the main app.

## Getting Started

If you would like to install locally please clone Express Server to run locally - `git clone https://github.com/bradyjcamp/city-explorer-api.git`

Then install the server dependencies locally by entering `npm i`.

Then enter command `npm start` to start the server.

## Architecture

- Application Deployed on Heroku
- Whiteboard created using Miro.
- This application includes JSX, React Bootstrap, express, dotenv, CORS and weatherbit API

## Change Log

- 02-22-2022 5:40pm EST - File structure and data imported.
- 02-22-2022 7:30pm EST - Created /weather root and sent to app
- 02-23-2022 6:30pm EST - updated data sent from /weather root to be live weather forecast
- 02-23-2022 8:30pm EST - Created /movies root and used third party API to send data to app
- 02-24-2022 7:20pm EST - Added weather.js and movies.js and refactored
- 02-25-2022 7:00pm EST - Added cache to weather.js
- 02-25-2022 7:30pm EST - Added cache to movies.js
