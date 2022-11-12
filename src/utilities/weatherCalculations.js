import { reports } from "./weatherReport";

function findReport(value) {
  return reports.find(
    (report) => report.title.substring(0, 4) === value.substring(0, 4)
  );
}

export function getWeatherTitle(value) {
  return findReport(value) ? findReport(value).title : value;
}

export function getCelsius(value) {
  return Math.ceil(value - 273.15);
}

export function getPressure(value) {
  // in kN/m2
  return Math.ceil(value * 0.1);
}

export function getRainProbability(value) {
  const weatherTitle = findReport(value);
  if (!weatherTitle || !weatherTitle.max) return "--";

  const { min, max } = weatherTitle;
  return Math.floor(Math.random() * (max - min) + min);
}

export function getIllustrations(cityTime, value) {
  const reportObj = reports.find((report) => report.title === value) || {};
  return (
    (reportObj.content && reportObj.content(cityTime)) || (
      <div className="bg-default_cloud"></div>
    )
  );
}

export function getCityTime(value) {
  const localTime = new Date().getTime();
  const localOffset = new Date().getTimezoneOffset() * 60000;
  const currentUtcTime = localOffset + localTime;
  const cityOffset = currentUtcTime + 1000 * value;
  const cityTime = new Date(cityOffset).toTimeString().split(" ")[0];
  return cityTime;
}
