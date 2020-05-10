import React from 'react';
import { Switch , Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Login from './login';
import Home from './home';
import Register from './register';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
    </Switch>
)

export default Main;