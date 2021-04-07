import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouters } from './DashboardRouters';

export const AppRouter = () => {
    const { user:{ logged } } = useContext(AuthContext);
    return (
    <Router>
        <div>
            <Switch>
                <PublicRoute 
                    exact 
                    path="/login" 
                    isAutenticated = { logged }
                    component={ LoginScreen }
                />
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
