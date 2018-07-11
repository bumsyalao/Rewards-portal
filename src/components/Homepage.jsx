import React from 'react';

class Homepage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <div className="row">
                    <div className="flex-date">
                        <div className="my-header">Dashboard</div>
                        <div className="date-toggle dropdown">
                            Today:<b> 20 Apr</b>
                            <div className="dropdown-content">
                                <a href="#">Today</a>
                                <a href="#">Yesterday</a>
                                <a href="#">Last 7 Days</a>
                                <a href="#">Last 30 Days</a>
                                <a href="#">This Month</a>
                                <a href="#">Last Month</a>
                                <a href="#">Custom Range</a>
                                <div className="dropdown-btns">
                                    <button>apply</button>
                                    <button>cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-box">Search</div>
                </div>
                <div className="grid-items">
                    <div className="card1"></div>
                    <div className="card2"></div>
                    <div className="card3"></div>
                    <div className="card4"></div>
                    <div className="chart"></div>
                </div>
            </div>
        );
    }
}

export default Homepage;
