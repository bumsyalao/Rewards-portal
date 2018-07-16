import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Report from './Report';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'Today',
            table: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
        axios.get('http://www.amock.io/api/bunmi/report-yesterday')
        .then(response => {
            this.setState({ table: response.data});
        })
    }
    handleChange(e) {
        let newValue = e.target.id.replace(/_/g, " ");
        this.setState({ selected: newValue });
    }
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="dashboard">
                <Navbar />
                <div className="homepage">
                    <div className="row">
                        <div className="flex-date">
                            <div className="my-header">Dashboard</div>
                            <div className="date-toggle dropdown">
                                <div className="selected-date">
                                    <b>{this.state.selected}</b>
                                </div>
                                <i className="mdi mdi-arrow-down-drop-circle dropdwn-arrow" />
                                <div className="dropdown-content">
                                    <span id="Today" value="Today" onClick={this.handleChange}>Today</span>
                                    <span id="Yesterday" value="Yesterday" onClick={this.handleChange}>Yesterday</span>
                                    <span id="Last_7_Days" value="Last 7 Days" onClick={this.handleChange}>Last 7 Days</span>
                                    <span id="Last_30_Days" value="Last 30 Days" onClick={this.handleChange}>Last 30 Days</span>
                                    <span id="This_Month" value="This Month" onClick={this.handleChange}>This Month</span>
                                    <span id="Last_Month" value="Last Month" onClick={this.handleChange}>Last Month</span>
                                    <span id="Custom_Range" value="Custom Range" onClick={this.handleChange}>Custom Range</span>
                                    <div className="dropdown-btns">
                                        <button onClick={this.handleSubmit}>Apply</button>
                                        <button>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="search-panel">
                            <input className="search-box" type="text" placeholder="Search"></input>
                            <i className="mdi mdi-magnify" />
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route
                        path={`${this.props.match.url}/my-dashboard`}
                        component={Homepage} />
                    <Route
                        path={`${this.props.match.url}/report`}
                        component={Report} />
                </Switch>
            </div>
        );
    }


}

export default Dashboard;
