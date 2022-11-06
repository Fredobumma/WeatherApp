import React from "react";
import { getIllustrations } from "../utilities/weatherReport";

const Illustrations = ({ weather }) => {
  return (
    <section className="illustrations">{getIllustrations(weather)}</section>
  );
};

export default Illustrations;
