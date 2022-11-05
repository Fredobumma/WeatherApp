import React from "react";
import logo from "./images/logo.svg";
import NavBar from "./component/navbar";
import Heading from "./component/heading";
import Illustrations from "./component/illustrations";
import ForecastDetails from "./component/forecastDetails";
// import { getWeatherForecast } from "./service/weatherForecastService";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main>
        <NavBar logo={logo} />
        <Heading />
        <Illustrations />
        <ForecastDetails />
      </main>
    </React.Fragment>
  );
}

export default App;
