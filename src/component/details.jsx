import React from "react";

const Details = () => {
  return (
    <section>
      <div className="temperature--details">
        <div className="temperature__average">51*</div>
        <div>
          <span className="temperature__minmax">47*</span>
          <span className="temperature__minmax">63*</span>
        </div>
      </div>
      <div className="info--details">
        <div>
          <div className="icon info--icon pressure"></div>
          <div className="info__text">106km/h</div>
        </div>
        <div>
          <div className="icon info--icon humidity"></div>
          <div className="info__text">22%</div>
        </div>
        <div>
          <div className="icon info--icon rain"></div>
          <div className="info__text">11%</div>
        </div>
      </div>
    </section>
  );
};

export default Details;
