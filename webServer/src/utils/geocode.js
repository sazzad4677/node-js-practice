const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic2F6emFkNzgiLCJhIjoiY2t0Ym00M3d0MXdwYzMybzhwY3BtYmUyMSJ9.lMMEtboa7JsE1vOUW-4W8A&limit=1`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
