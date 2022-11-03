import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main>
        <nav className="navbar">
          <img src={logo} className="app-logo" alt="logo" />
          <span className="search-icon"></span>
        </nav>
        <header>
          <h2>London</h2>
          <p>Cloudy</p>
        </header>
        <section className="hero--section">
          <div></div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
