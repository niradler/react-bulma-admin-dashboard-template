import React, { Component } from "react";
import PublicRoutes from "../routes/PublicRoutes";
import GuardedRoutes from "../routes/GuardedRoutes";
import { BrowserRouter, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
            <GuardedRoutes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
