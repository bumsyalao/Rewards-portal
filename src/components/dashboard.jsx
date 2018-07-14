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
                <div className="homepage">
                <div className="row">
                    <div className="flex-date">
                        <div className="my-header">Dashboard</div>
                        <div className="date-toggle dropdown">
                            <div className="selected-date">
                                Today:<b> 20 Apr</b>
                            </div>
                            <i className="mdi mdi-arrow-down-drop-circle dropdwn-arrow"/>
                            <div className="dropdown-content">
                                <a href="#">Today</a>
                                <a href="#">Yesterday</a>
                                <a href="#">Last 7 Days</a>
                                <a href="#">Last 30 Days</a>
                                <a href="#">This Month</a>
                                <a href="#">Last Month</a>
                                <a href="#">Custom Range</a>
                                <div className="dropdown-btns">
                                    <button>Apply</button>
                                    <button>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-panel">
                    <input className="search-box" type="text" placeholder="Search"></input>
                    <i className="mdi mdi-magnify"/>
                    </div>
                </div>
                </div>
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
