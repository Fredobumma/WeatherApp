import React, { useState } from "react";
import logo from "./images/logo.svg";
import NavBar from "./common/navbar";
import Heading from "./common/heading";
import Illustrations from "./common/illustrations";
import ForecastDetails from "./common/forecastDetails";
// import { getWeatherForecast } from "./service/weatherForecastService";
import "./App.css";

function App() {
  const [appState, setAppState] = useState({
    searchQuery: "",
    toggleSearchInput: false,
  });
  const stateObj = { ...appState };

  const handleSearchInput = () => {
    stateObj.toggleSearchInput = true;
    setAppState(stateObj);
  };

  const handleCloseSearch = () => {
    stateObj.toggleSearchInput = false;
    setAppState(stateObj);
  };

  const handleSearchQuery = ({ target: { value } }) => {
    stateObj.searchQuery = value;
    setAppState(stateObj);
  };

  return (
    <React.Fragment>
      <main>
        <NavBar
          logo={logo}
          searchQuery={appState.searchQuery}
          searchInput={appState.toggleSearchInput}
          onClickToSearch={handleSearchInput}
          onCloseSearch={handleCloseSearch}
          onChange={handleSearchQuery}
        />
        <Heading />
        <Illustrations />
        <ForecastDetails />
      </main>
    </React.Fragment>
  );
}

export default App;
