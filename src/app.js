const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const weatherData = require('../utils/weatherData');

const port = process.env.PORT || 3000;


app.get('/weather', (req, res) => {
    // res.send('Weather');
    {
        if (!req.query.address) {
            return res.send("Address is required");
        }
        weatherData(req.query.address, (error, result) => {
            if (error) {
                return res.send(error);
            }
            res.send(result);
        });
    } 
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
