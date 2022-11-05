import React from "react";
import logo from "./images/logo.svg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main>
        <nav className="navbar">
          <img src={logo} className="app-logo" alt="logo" />
          <span className="icon icon-search"></span>
        </nav>
        <header>
          <h1>London</h1>
          <p>Cloudy</p>
        </header>
        <section className="illustrations">
          <div className="illustrations__cloud"></div>
          <div className="illustrations__sun"></div>
          <div className="illustrations__cloud_2"></div>
        </section>
        <section>
          <div class="temperature--details">
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
      </main>
    </React.Fragment>
  );
}

export default App;
