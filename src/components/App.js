import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div className="container" />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
