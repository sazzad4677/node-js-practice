console.log("Client side javascript file is loaded");

const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const weatherData = document.querySelector("#weather");
const errorData = document.querySelector("#error");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // get location from search filed
  const location = searchElement.value;

  // clear data
  errorData.textContent = "";
  weatherData.textContent = "";

  fetch(`/weather?location=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        errorData.textContent = data.error;
      } else {
        weatherData.textContent = `${data.location} ${data.forecast}`;
      }
    });
  });
});
