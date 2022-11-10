import React from "react";
import { getDay_Night } from "../utilities/weatherReport";

const Heading = ({ city, weather, cityTime }) => {
  if (weather === "Clear") weather = getDay_Night(cityTime, "Sunny", weather);

  return (
    <header>
      <h1>{city}</h1>
      <p>{weather}</p>
    </header>
  );
};

export default Heading;
