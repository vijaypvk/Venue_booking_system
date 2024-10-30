import '../styles/register.css';

function Register() {
    return (
        <div className="register-container">
            <div className="register-box">
 
                <h2 className="register-title">Register</h2>

                <div className="reg-group">
                    <label htmlFor="username">name <span className="required">*</span></label>
                    <input type="username" id="username" className="input-field" required />
                </div>
        

                <div className="reg-group">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input type="email" id="email" className="input-field" required />
                </div>

                <div className="reg-group">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input type="password" id="password" className="input-field" required />
                </div>

                <div>
                <button className="register-btn">Register</button>
                </div>
            </div>
        </div>
    );
}

export default Register;

