import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PrivateRoute from "./private.routes";

import Home from "./views/Home";
// import Tarefa from "./views/Tarefas";
import SignIn from "./views/SignIn";
import SignUp from "./views/SingUp";
import Dash from "./views/Dash";
import Services from "./views/Services";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route path="/tasks" component={Tarefa} /> */}
                <Route path="/signIn" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/services" component={Services} />
                <PrivateRoute path="/dashboard" exact component={Dash} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;