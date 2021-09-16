const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

geocode(address, (error, data) => {
  if (address) {
    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  } else {
    console.log("Please provide a location");
  }
});
