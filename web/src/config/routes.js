import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminController from './app/controllers/AdminController';
import PublicController from './app/controllers/PublicController';
import ProtectedRoute from './components/ProtectedRoute';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <ProtectedRoute path="/admin" component={AdminController} />
                <Route path="/" component={PublicController} />
            </Switch>
        </Router>
    );
};

export default Routes;