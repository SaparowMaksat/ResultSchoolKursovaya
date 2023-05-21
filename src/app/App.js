import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Users from "./layouts/users";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css.map";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualitiesProvider } from "./hooks/useQuality";
import AuthProvider from "./hooks/useAuth";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logouts";

const App = () => {
    return (
        <div>
            <AuthProvider>
                <NavBar />
                <ProfessionProvider>
                    <QualitiesProvider>
                        <Switch>
                            <ProtectedRoute
                                path="/users/:userId?/:edit?"
                                component={Users}
                            />
                            <Route path="/login/:type?" component={Login} />
                            <Route path="/logout" component={LogOut} />
                            <Route path="/" exact component={Main} />
                            <Redirect to="/" />
                        </Switch>
                    </QualitiesProvider>
                </ProfessionProvider>
            </AuthProvider>
            <ToastContainer />
        </div>
    );
};

export default App;
