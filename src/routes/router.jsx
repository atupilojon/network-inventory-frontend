import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import Devices from "../components/devices";
import RouteLayout from "./routerLayout";

export default function AppRoutes() {
    return (
        <Router>
            <Route exact path="/">
                <Redirect to="/devices" />
            </Route>
            <Switch>
                <RouteLayout exact path="/devices" component={Devices} />
            </Switch>
        </Router>
    );
}