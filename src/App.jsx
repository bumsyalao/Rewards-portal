import React from 'react';

class App extends React.Component{
    render() {
        return (
            <div className="wrapper">
                <div className="form">
                    <h1 className="login-header">Sign In </h1>
                    <img src="./images/logo.png" width="15%" height="15%"/>
                    <form className="login-form">
                        <label className="email-label" for="email">Email</label><br/>
                        <input id="email" type="text" name="email"/><br/>
                        <label className="password-label" for="password">Password</label><br/>
                        <input id="password" type="password" name="password"/><br/>
                        <p className="forgot">Forgot password?</p>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default App;
