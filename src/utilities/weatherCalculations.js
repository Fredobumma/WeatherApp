const reports = [
  { title: "Sunny", min: 0, max: 30 },
  { title: "Cloudy", min: 30, max: 60 },
  { title: "Rainy", min: 60, max: 70 },
  { title: "Misty" },
  { title: "Snowy" },
];

function findReport(value) {
  return (
    reports.find(
      (report) => report.title.substring(0, 4) === value.substring(0, 4)
    ) || {}
  );
}

export function getWeatherTitle(value) {
  if (value === "Clear") return reports[0].title;

  return findReport(value).title || `${value}y`;
}

export function getCelsius(value) {
  return Math.ceil(value - 273.15);
}

export function getPressure(value) {
  // in kN/m2
  return Math.ceil(value * 0.1);
}

export function getRainProbability(value) {
  const weathertitle = findReport(value);
  const { min, max } = weathertitle;

  return Math.floor(Math.random() * (max - min) + min) || "--";
}
