// Init storage
const storage = new Storage();
// Get Stored location data
const weatherLocation = storage.getLocationData();
// Init Weather Class
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI Class
const ui = new UI();

// Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change Location Event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // change location
  weather.changeLocation(city, state);

  //set location
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close Modal
  $("#locModal").modal("hide");
});

// weather.changeLocation("Austin", "TX");

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
      // console.log(results);
    })
    .catch((err) => console.log(err));
}
