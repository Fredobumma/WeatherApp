import React from "react";
import PropTypes from "prop-types";
import { getIllustrations } from "../utilities/weatherCalculations";

const Illustrations = ({ cityTime, weather }) => {
  return (
    <section className="illustrations">
      {getIllustrations(cityTime, weather)}
    </section>
  );
};

Illustrations.propTypes = {
  weather: PropTypes.string,
  cityTime: PropTypes.string,
};

export default Illustrations;
