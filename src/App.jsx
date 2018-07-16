import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './components/Auth.jsx';
import Dashboard from './components/Dashboard.jsx';

const App = () => (
    
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
);

export default App;

