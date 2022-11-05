import React from "react";
import logo from "./images/logo.svg";
import NavBar from "./component/navbar";
import Heading from "./component/heading";
import Illustrations from "./component/illustrations";
import ForecastDetails from "./component/forecastDetails";
import http from "./service/httpService";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main>
        {console.log(http.get())}
        <NavBar logo={logo} />
        <Heading />
        <Illustrations />
        <ForecastDetails />
      </main>
    </React.Fragment>
  );
}

export default App;
