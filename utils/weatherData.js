const request = require('request');

//API key = bdbffb3dd8d6c3451dff4c60cb39ff46

const openweathermap = {
    BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    SECRET_KEY: 'e9543918b5894c94e4485dfca4f0a7ff'
}

const weatherData = (address, callback) => {
    const url = openweathermap.BASE_URL + encodeURIComponent(address) + '&appid=' + openweathermap.SECRET_KEY;

    request({ url, json: true }, (error,data) => {
        if(error) {
            callback('Unable to connect to weather service', undefined);
        } 
        callback(false,data?.body);
    });
}

module.exports = weatherData;