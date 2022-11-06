import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import logo from "./images/logo.svg";
import NavBar from "./common/navbar";
import Heading from "./common/heading";
import Illustrations from "./common/illustrations";
import ForecastDetails from "./common/forecastDetails";
import { getWeatherForecast } from "./services/weatherForecastService";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [appState, setAppState] = useState({
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

  const doSubmit = async () => {
    try {
      await getWeatherForecast(stateObj.searchQuery);
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
