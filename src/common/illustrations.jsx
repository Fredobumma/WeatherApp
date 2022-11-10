import React from "react";
import { getIllustrations } from "../utilities/weatherCalculations";

const Illustrations = ({ cityTime, weather }) => {
  return (
    <section className="illustrations">
      {getIllustrations(cityTime, weather)}
    </section>
  );
};

export default Illustrations;
