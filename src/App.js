import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <Footer />
    </div>
  );
}

export default App;
