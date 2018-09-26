import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Videos from "./Videos";
import NewVideo from "./NewVideo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route exact path="/" component={Videos} />
          <Route exact path="/new" component={NewVideo} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
