import http from "./httpService";

const apiEndpoint = (city) => `/weather?q=${city}&appid=${process.env.API_KEY}`;

export function getWeatherForecast(city) {
  return http.get(apiEndpoint(city));
}
