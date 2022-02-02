import React from "react";
import { Route } from "react-router-dom";
import Navigation from "../components/common/Nav";

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return (<React.Suspense fallback={'loading..'}>
                    <Navigation {...props} />
                    <Component  {...props} />
                </React.Suspense>)
            }}
        />
    );
};
export default PublicRoute;
