export const reports = [
  {
    title: "Sunny",
    min: 0,
    max: 30,
    content: (
      <div className="sky">
        <div className="sunny"></div>
      </div>
    ),
  },
  {
    title: "Cloudy",
    min: 30,
    max: 60,
    content: (
      <div className="sky">
        <div className="cloud"></div>
        <div className="cloudy-sun"></div>
        <div className="cloud-2"></div>
      </div>
    ),
  },
  {
    title: "Rainy",
    min: 60,
    max: 70,
    content: (
      <div className="rainy-cloud">
        <div className="rain-drop-1"></div>
        <div className="rain-drop-2"></div>
        <div className="rain-drop-3"></div>
      </div>
    ),
  },
  { title: "Snowy", content: <div className="snow"></div> },
  { title: "Misty" },
];

export function getIllustrations(value) {
  const reportObj = reports.find((report) => report.title === value);
  if (reportObj) return reportObj.content;
  return <div className="default-cloud"></div>;
}
