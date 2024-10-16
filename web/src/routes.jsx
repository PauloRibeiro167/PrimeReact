import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminController from './controllers/AdminController';
import PublicController from './controllers/PublicController';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin" component={AdminController} />
                <Route path="/" component={PublicController} />
            </Switch>
        </Router>
    );
};

export default Routes;