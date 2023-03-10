import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/layouts/login";
import Main from "./components/layouts/main";
import Users from "./components/layouts/users";
import NavBar from "./components/navBar";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;
