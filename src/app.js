const express = require("express");
const weatherData = require("../utils/weatherData");
const path = require("path");
const hbs = require("hbs");
const app = express();
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.render("index");
});

// Route to retrieve weather data for a given address
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "Address is required" });
  }

  weatherData(req.query.address, (error, data) => {
    if (error) {
      return res.send({ error });
    }
    res.send(data);
  });
});

app.get("*", (req, res) => {
  res.render("404",{
    title: "Page not found",});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
