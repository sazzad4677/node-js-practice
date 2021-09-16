// ------>  import
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

// ------> path using raw node js
// console.log(__dirname); // directory name
// console.log(path.join(__dirname, "../public/index.html")); // public directory

// ------> define paths for express config
const app = express();
const port = process.env.PORT || 5000;
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// ------> Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// ------> Setup static directory to serve
app.use(express.static(publicDirectory));

// ------>  route definitions
app.get("", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "Sazzad",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Sazzad",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help",
    message: "Submitted your message",
    name: "Sazzad",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.location) {
    return res.send({
      error: "No location specified",
    });
  }
  geocode(
    req.query.location,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({
          error,
        });
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Sazzad",
    errorMessage: "Help article Not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Sazzad",
    errorMessage: "Page not found",
  });
});

// ------> Server initialization
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
