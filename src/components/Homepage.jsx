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
                <div class="grid-items">
                    <div class="card1"></div>
                    <div class="card2"></div>
                    <div class="card3"></div>
                    <div class="card4"></div>
                    <div class="chart"></div>
                </div>
            </div>
        );
    }
}

export default Homepage;
