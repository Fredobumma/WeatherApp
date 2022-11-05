import http from "./httpService";

const apiEndpoint = (city) =>
  `/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;

export async function getWeatherForecast(city) {
  return await http.get(apiEndpoint(city));
}
