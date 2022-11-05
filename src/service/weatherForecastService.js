import http from "./httpService";

export async function getWeatherForecast() {
  return await http.get("");
}
