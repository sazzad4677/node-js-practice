const request = require("request");

const forecast = (longitude, latitude, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=b155439897f7eea55021220dafb180c2&query=${longitude},${latitude}&units=f`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      cb("unable to connect to weather services", "");
    } else if (response.body.error) {
      cb("unable to find location", "");
    } else {
      cb(
        "",
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. Feels like ${response.body.current.feelslike} degrees out`
      );
    }
  });
};

module.exports = forecast;
