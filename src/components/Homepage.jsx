import React from 'react';

class Homepage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <div className="row">
                    <div className="flex-date">
                        <div className="my-header">Dashboard</div>
                        <div className="date-toggle">Today: 20 Apr</div>
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
