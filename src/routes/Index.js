import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { RBRoutes } from './routes';

const Index = () => {
    return (
        <Router>
            <Switch>
                {
                    RBRoutes.map((route, index) => {
                        return !route.children ? (
                            <route.route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            ></route.route>
                        ) : <span>HI</span>;
                    })
                }
            </Switch>
        </Router>
    )
}

export default Index
