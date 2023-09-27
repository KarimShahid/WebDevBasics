// Getting URL data
const getWeatherData = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b56d44c698msh4ae0b8753bdf5fbp17a143jsn7dfc60cb4dd6",
      "X-RapidAPI-Host": "weather-request.p.rapidapi.com",
    },
  };

  return fetch(
    `https://weather-request.p.rapidapi.com/weather/${city}`,
    options
  )
    .then((response) => response.json())
    .then((data) => data[0])
    .catch((err) => console.error(err));
};

// Searching the City
const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  // console.log(city);
  const data = await getWeatherData(city);
  showWeatherData(data);
  // document.getElementById("city-name").innerText = city;
};

// Showing the weather data using DOM
const showWeatherData = (weatherData) => {
  console.log(weatherData);
  document.getElementById("temp").innerText = weatherData.temperature;
  document.getElementById("weather-type").innerText = weatherData.weather;
  document.getElementById("city-name").innerText = weatherData.name;
};
