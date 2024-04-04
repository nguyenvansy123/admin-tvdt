import React from 'react'
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ component: Component, isLogin = true }) => {

    const getToken = () => window.localStorage.getItem("token")

    function CheckToken(Component) {

        if (getToken() && !isLogin)
            return <Navigate to="/" replace={true} />;

        if (!getToken())
            return <Navigate to="/login" replace={true} />;

        return <Component />;
    }

    return CheckToken(Component)
}
