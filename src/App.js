import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import logo from "./images/logo.svg";
import NavBar from "./common/navbar";
import Heading from "./common/heading";
import Illustrations from "./common/illustrations";
import ForecastDetails from "./common/forecastDetails";
import { getWeatherForecast } from "./services/weatherForecastService";
import {
  getCelsius,
  getPressure,
  getRainProbability,
  getWeatherTitle,
} from "./utilities/weatherCalculations";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [appState, setAppState] = useState({
    forecast: {},
    searchQuery: "",
    toggleSearchInput: false,
  });
  const stateObj = { ...appState };
  const notfoundError = "City not found";
  const emptyInputError = "Please enter a valid city name";

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

  const mapToViewModel = ({ name, weather, main }) => {
    const apiWeather = weather[0].main;
    return {
      city: name,
      humidity: main.humidity,
      weather: getWeatherTitle(apiWeather),
      averageTemp: getCelsius(main.temp),
      maxTemp: getCelsius(main.temp_max),
      minTemp: getCelsius(main.temp_min),
      pressure: getPressure(main.pressure),
      rainProbability: getRainProbability(apiWeather),
    };
  };

  const doSubmit = async () => {
    try {
      const { data } = await getWeatherForecast(stateObj.searchQuery);
      stateObj.forecast = mapToViewModel(data);
      stateObj.toggleSearchInput = false;
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error(notfoundError);
    }
    stateObj.searchQuery = "";
    setAppState(stateObj);
  };

  const handleSearch = () => {
    if (!stateObj.searchQuery) return toast(emptyInputError);
    doSubmit();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !stateObj.searchQuery)
      return toast(emptyInputError);

    if (e.key === "Enter") doSubmit();
  };

  return (
    <React.Fragment>
      <main>
        <ToastContainer />
        <NavBar
          logo={logo}
          searchQuery={appState.searchQuery}
          searchInput={appState.toggleSearchInput}
          onClickToSearch={handleSearchInput}
          onCloseSearch={handleCloseSearch}
          onChange={handleSearchQuery}
          onSearch={handleSearch}
          onKeyDown={handleKeyDown}
        />
        <Heading />
        <Illustrations />
        <ForecastDetails />
      </main>
    </React.Fragment>
  );
}

export default App;
