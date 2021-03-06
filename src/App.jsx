import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

const App = () => (
    
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
);

export default App;

