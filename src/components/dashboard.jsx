import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Report from './Report';

class Dashboard extends React.Component{

    render(){
        return(
            <div className="dashboard">
                <Navbar />
                <Switch>
                    <Route 
                        path={`${this.props.match.url}/my-dashboard`}
                        component={Homepage}/>
                    <Route 
                        path={`${this.props.match.url}/report`}
                        component={Report}/>
                </Switch>
            </div>
        );
    }


}

export default Dashboard;
