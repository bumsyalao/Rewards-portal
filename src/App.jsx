import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

const App = () => (
    
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
);

export default App;

