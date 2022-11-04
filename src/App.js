import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main>
        <nav className="navbar">
          <img src={logo} className="app-logo" alt="logo" />
          <span className="icon"></span>
        </nav>
        <header>
          <h2>London</h2>
          <p>Cloudy</p>
        </header>
        <section className="illustrations"></section>
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
              <span className="icon info--icon"></span>
              <span className="info__text">106km/h</span>
            </div>
            <div>
              <span className="icon info--icon"></span>
              <span className="info__text">22%</span>
            </div>
            <div>
              <span className="icon info--icon"></span>
              <span className="info__text">11%</span>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
