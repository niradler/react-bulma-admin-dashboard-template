import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Layout from '../screens/Layout';

class GuardedRoutes extends Component {

    render() {
        return (
            <Switch>
                  <Route exact path='/' component={Layout}/>
            </Switch>
        );
    }
}

export default GuardedRoutes;
