import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouters } from './DashboardRouters';

export const AppRouter = () => {
    const { user:{ logged } } = useContext(AuthContext);
    return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/login" component={ LoginScreen }/>
                <PrivateRoute 
                    path="/" 
                    isAutenticated = { logged }
                    component={ DashboardRouters }
                />
            </Switch>
        </div>
    </Router>
    )
}
