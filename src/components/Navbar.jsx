import React from 'react';
import { Link } from 'react-router-dom';
import ubalogored from '../images/logo-red.png';
import rewardsPortal from '../images/rewards-logo.png';

class Navbar extends React.Component {
    componentDidMount(){
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
        }
    }
    render() {
        return (
            <div className="nav-style nav">
                <div className="nav-bar">
                    <img className="rewards-logo" src={rewardsPortal} />
                    <div className="nav-right">
                    <i className="mdi mdi-bell"/>
                    <div className="profile-pic"> </div>
                    </div>
                </div>
                <div className="side-nav fixed">
                    <ul>
                        <li>
                        <i className="icon-dashboard"/>
                            <Link to="/dashboard/my-dashboard" href="#!">
                                Dashboard
                            </Link>
                            </li>
                        <li>
                            <div className="collapsible"><i className="icon-cms"/>Content Management<i className="mdi mdi-chevron-right left-icon" /></div>
                            <div className="content">
                                <ul>
                                    <li>Portal Report</li>
                                    <li>Redemption Report</li>
                                    <li>BI</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible"><i className="icon-user"/>User Management<i className="mdi mdi-chevron-right left-icon" /></div>
                            <div className="content">
                                <ul>
                                    <li>Portal Report</li>
                                    <li>Redemption Report</li>
                                    <li>BI</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible"><i className="icon-reporting"/> Reporting<i className="mdi mdi-chevron-right left-icon" /></div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <Link to="/dashboard/report" href="#!">
                                        Portal Report
                                        </Link>
                                    </li>
                                    <li>Redemption Report</li>
                                    <li>BI</li>
                                </ul>
                            </div>
                        </li>
                        <li><i className="icon-settings"/>System Settings</li>
                    </ul>
                    <div className="copyright">
                            <img src={ubalogored} />
                            <p>Copyright © 2018 UBA Group PLC. <br />Powered by Interswitch</p>
                        </div>
                </div>

            </div>
        );
    }
}

export default Navbar;
