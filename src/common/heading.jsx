import React from "react";

const Heading = ({ city, weather }) => {
  return (
    <header>
      <h1>{city}</h1>
      <p>{weather}</p>
    </header>
  );
};

export default Heading;
