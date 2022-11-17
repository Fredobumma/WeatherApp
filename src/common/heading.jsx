import React from "react";
import PropTypes from "prop-types";
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

Heading.propTypes = {
  city: PropTypes.string,
  weather: PropTypes.string,
  cityTime: PropTypes.string,
};

export default Heading;
