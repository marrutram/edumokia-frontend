import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect, useLocation } from "react-router-dom";
import { globalC } from "./context";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage/index"
import { users } from "./constants";

const PrivateRoute = (props) => {
    const location = useLocation();
    const { authLogin } = useContext(globalC);
    const menu = users[authLogin?.user]?.menu;
    const isLogin = authLogin !== undefined && menu !== undefined
    if (!isLogin) localStorage.clear();

    return isLogin ? (
        <Route {...props} />
    ) : (
        <Redirect
            to={{
                pathname: "/",
                state: { from: location }
            }}
        />
    );
};

const Routes = () => {
    const { authLogin } = useContext(globalC);
    const menu = authLogin && users[authLogin?.user]?.menu;
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/signup" component={SignIn}/>
            {menu?.home && <PrivateRoute exact path="/home" component={Home}/>}
        </Switch>
    </BrowserRouter>
};

export default Routes;
