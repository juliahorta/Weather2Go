
const API_KEY = 'DOo1sefPl3JQyChMzljLXdXYfo6EZPIp'; // jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3 // cwlzjnKODPSt5tGLh63JEXDKL03vtfMB
const API_HOST = 'http://api.accuweather.com/';
const API_VERSION = 'v1';


const LocationApiUrl = (param, group) => `${API_HOST}locations/${API_VERSION}/${param}/${group}?apikey=${API_KEY}`;

const WeatherApiUrl = key => `${API_HOST}forecasts/${API_VERSION}/hourly/12hour/${key}?apikey=${API_KEY}`;

export default function getLocations() {
  return fetch(LocationApiUrl('topcities', 150)).then(response => response.json());
}
export function getWeather(key) {
  return fetch(WeatherApiUrl(key))
    .then(response => response.json());
}
