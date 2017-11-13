import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import Login from "../screens/Login";

class PublicRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
      </Switch>
    );
  }
}

export default PublicRoutes;
