import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser, isAdmin } from '../auth/authService';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const user = getCurrentUser();

    return (
        <Route
            {...rest}
            render={(props) =>
                isAdmin(user) ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default ProtectedRoute;