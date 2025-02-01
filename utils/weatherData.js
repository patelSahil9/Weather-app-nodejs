const request = require('request');

const openweathermap = {
    BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    SECRET_KEY: 'bdbffb3dd8d6c3451dff4c60cb39ff46',
};

const weatherData = (address, callback) => {
    const url = `${openweathermap.BASE_URL}?q=${encodeURIComponent(address)}&appid=${openweathermap.SECRET_KEY}`;

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.cod !== 200) {
            callback(body.message, undefined);
        } else {
            callback(false, body); // Send the weather data
        }
    });
};

module.exports = weatherData;
    