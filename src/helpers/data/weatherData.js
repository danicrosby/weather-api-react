import axios from 'axios';

const baseURL = 'https://www.getpostman.com/collections/1b9c951eb7db4a94475f';

const getWeather = () => new Promise((resolve, reject) => {
  axios.get(baseURL)
    .then((response) => resolve((response.data)))
    .catch((error) => reject(error));
});

export default getWeather;

// HINT: To get the ICON from the response, use the following: http://openweathermap.org/img/wn/{INSERT_WEATHER_ICON}@2x.png
