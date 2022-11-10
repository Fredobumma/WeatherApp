export const reports = [
  {
    title: "Clear",
    min: 10,
    max: 30,
    content: (cityTime) => (
      <div className="sky">
        <div className={getDay_Night(cityTime, "sunny", "moon")}></div>
      </div>
    ),
  },
  {
    title: "Cloudy",
    min: 30,
    max: 60,
    content: (cityTime) => (
      <div className="sky">
        <div className="cloud"></div>
        <div
          className={getDay_Night(cityTime, "cloudy-sun", "cloudy-moon")}
        ></div>
        <div className="cloud-2"></div>
      </div>
    ),
  },
  {
    title: "Rainy",
    min: 60,
    max: 70,
    content: () => (
      <div className="rainy-cloud">
        <div className="rain-drop-1"></div>
        <div className="rain-drop-2"></div>
        <div className="rain-drop-3"></div>
      </div>
    ),
  },
  { title: "Snowy", content: () => <div className="snow"></div> },
  { title: "Misty" },
  { title: "Drizzling" },
];

export function getDay_Night(time, dawn, dusk) {
  const hour = time.substring(0, 2);
  return hour > 7 && hour < 18 ? dawn : dusk;
}
