import React from "react";
import PropTypes from "prop-types";

const ForecastDetails = ({
  averageTemp,
  maxTemp,
  minTemp,
  pressure,
  humidity,
  rainProbability,
}) => {
  return (
    <section>
      <div className="temperature--details">
        <div className="temperature__average">{averageTemp}°</div>
        <div>
          <span className="temperature__minmax">{maxTemp}°</span>
          <span className="temperature__minmax">{minTemp}°</span>
        </div>
      </div>
      <div className="extra-info--details">
        <div>
          <div className="icon extra-info--icon bg-pressure"></div>
          <div className="extra-info__text">
            {pressure}kN/m<sup>2</sup>
          </div>
        </div>
        <div>
          <div className="icon extra-info--icon bg-humidity"></div>
          <div className="extra-info__text">{humidity}%</div>
        </div>
        <div>
          <div className="icon extra-info--icon bg-rain"></div>
          <div className="extra-info__text">{rainProbability}%</div>
        </div>
      </div>
    </section>
  );
};

ForecastDetails.propTypes = {
  averageTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  minTemp: PropTypes.number,
  pressure: PropTypes.number,
  humidity: PropTypes.number,
  rainProbability: PropTypes.number,
};

export default ForecastDetails;
