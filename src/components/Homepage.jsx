import React from 'react';

class Homepage extends React.Component {
    render() {
        return (
                <div className="grid-items">
                    <div className="card1 flex-grid-item box">
                        <h1>1,234</h1><br/>
                        <p>Registered Customers</p>

                    </div>
                    <div className="card2 flex-grid-item box">
                        <h1>3,456</h1><br/>
                        <p>Value of Redemptions</p>
                    </div>
                    <div className="card3 flex-grid-item box">
                        <h1>3,456</h1><br/>
                        <p>Points Redeemed</p>
                    </div>
                    <div className="card4 flex-grid-item box">
                        <h1>3,456,789</h1><br/>
                        <p>Cash Spend (Debit Card)</p>
                    </div>
                    <div className="chart box">
                        <div className="summary-header">
                            <div className="summary">Summary</div>
                            <div className="month">Month</div>
                            <button className="time">All Time</button>
                        </div>
                        <div className="summary-body">
                            <p>Lorem Ipsum</p>
                            <h4>123456789</h4>
                            <p>Lorem Ipsum</p>
                            <h4>123456789</h4>
                            <p>Lorem Ipsum</p>
                            <h4>123456789</h4>
                            <p>Lorem Ipsum</p>
                            <h4>123456789</h4>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Homepage;
