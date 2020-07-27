class Weather {
  constructor(city, state) {
    this.apiKey = "08f18d7a9ce9ea5d93a378b377b0e2b3";
    this.city = city;
    this.state = state;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=imperial&APPID=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
