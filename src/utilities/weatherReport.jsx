export const reports = [
  {
    title: "Clear",
    min: 10,
    max: 30,
    content: (cityTime) => (
      <div className="bg-sky">
        <div className={getDay_Night(cityTime, "bg-sunny", "bg-moon")}></div>
      </div>
    ),
  },
  {
    title: "Cloudy",
    min: 30,
    max: 60,
    content: (cityTime) => (
      <div className="bg-sky">
        <div className="bg-cloudy"></div>
        <div
          className={getDay_Night(cityTime, "bg-cloudySun", "bg-cloudyMoon")}
        ></div>
        <div className="bg-cloudy_2"></div>
      </div>
    ),
  },
  {
    title: "Rainy",
    min: 60,
    max: 70,
    content: () => (
      <div className="bg-rainyCloud">
        <div className="bg-rainDrop1"></div>
        <div className="bg-rainDrop2"></div>
        <div className="bg-rainDrop3"></div>
      </div>
    ),
  },
  { title: "Snowy", content: () => <div className="bg-snow"></div> },
  { title: "Misty" },
  { title: "Drizzling" },
];

export function getDay_Night(time, dawn, dusk) {
  const hour = time.substring(0, 2);
  return hour > 6 && hour < 18 ? dawn : dusk;
}
