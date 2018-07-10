import React from 'react';
import { Switch, Route } from 'react-router-dom';

import auth from './components/auth';
import dashboard from './components/dashboard';

const App = () => (
    <Switch>
        <Route exact path="/" component={auth} />
        <Route path="/dashboard" component={dashboard} />
    </Switch>
);

export default App;

