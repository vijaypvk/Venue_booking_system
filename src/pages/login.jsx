import '../styles/login.css';
import { Link } from 'react-router-dom';
import React from 'react';
function Login() {
    return (
        <div>
            <header className="header shadow-sm">
                            <div className="logo">
                    <Link to="/">
                        <img src="src/assets/logo.svg" alt="Logo" />
                    </Link>
                </div>
    </header>
        <div className="login-container">
                
            <div className="login-box">
 
                <h2 className="login-title">Sign in</h2>

                <button className="google-signin">
                    Sign in with Google
                </button>

                <p className="or-separator">or</p>

                <div className="form-group">
                    <label htmlFor="email">Username <span className="required">*</span></label>
                    <input type="email" id="email" className="input-field" required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input type="password" id="password" className="input-field" required />
                </div>

                <div className="options">
                    <div className="remember-me">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <a href="#" className="forgot-password">Forgot password?</a>
                </div>
                <Link to="/dashboardhome">
                <button className="sign-in-btn">Sign in</button>
                </Link>
                <div className="extra-options">           
                
                    <Link className='create-account' to="/register">   
                    Create account        
                    </Link>
                </div>

                <p className="legal">
                    This site is protected by reCAPTCHA  <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
                </p>
            </div>
        </div>
        </div>
    );
}

export default Login;
