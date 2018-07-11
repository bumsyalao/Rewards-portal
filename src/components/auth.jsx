import React from 'react';
import { Link } from 'react-router-dom';
import ubalogo from '../images/logo.png';

class Auth extends React.Component{
    render() {
        return (
            <div className="wrapper">
                <div className="form">
                    <h1 className="login-header">Sign In </h1>
                    <img className="uba-logo" src={ubalogo}/>
                    <form className="login-form">
                    <div>
                        <label htmlFor="email">Email</label><br/>
                        <input id="email" type="text" name="email"/><br/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br/>
                        <input id="password" type="password" name="password"/><br/>
                    </div>
                        <p className="forgot">Forgot your password?</p>
                        <Link to="/dashboard/my-dashboard" href="#!">
                        <button className="login-btn">
                        
                            Login
                        
                        </button>
                        </Link>{' '}
                        <p className="register">Dont have an account? </p>
                        <button className="access-btn">Request for Access </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Auth;
