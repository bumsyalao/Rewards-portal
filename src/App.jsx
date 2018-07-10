import React from 'react';

class App extends React.Component{
    render() {
        return (
            <div className="wrapper">
                <div className="form">
                    <h1 className="login-header">Sign In </h1>
                    <img className="uba-logo" src="./images/logo.png"/>
                    <form className="login-form">
                    <div>
                        <label className="email-label" for="email">Email</label><br/>
                        <input id="email" type="text" name="email"/><br/>
                    </div>
                    <div>
                        <label for="password">Password</label><br/>
                        <input id="password" type="password" name="password"/><br/>
                    </div>
                        <p className="forgot">Forgot your password?</p>
                        <button className="login-btn">Login</button>
                        <p className="register">Dont have an account? </p>
                        <button className="access-btn">Request for Access </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default App;
