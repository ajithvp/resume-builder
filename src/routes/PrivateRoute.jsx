import React from "react";
import { Route, Redirect } from "react-router-dom";
import Nav from '../components/common/Nav'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem("rb-data")
                    ? <React.Suspense fallback={'loader'}>
                        <Nav {...props} />
                        <Component {...props} />
                    </React.Suspense>
                    : <Redirect to={{ pathname: "/" }} />
            }
        />
    );
};
export default PrivateRoute;
