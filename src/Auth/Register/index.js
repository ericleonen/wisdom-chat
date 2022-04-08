import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    registerWithEmailAndPassword, 
    signInWithGoogle 
} from '../../firebase/authentication';

import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const register = () => {
        if (!name) {
            alert('Please enter name');
        }
        else {
            registerWithEmailAndPassword(name, email, password);
        }
    };

    return (
        <div className="Register">
            <div className="register-container">
                <input 
                    type="text"
                    className="register-field"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your Name"
                />
                <input 
                    type="text"
                    className="register-field"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input 
                    type="password"
                    className="register-field"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="register-btn" onClick={register}>
                    Register
                </button>
                <button className="register-btn google-btn" onClick={signInWithGoogle}>
                    Register with Google
                </button>
                <div>
                    Already have an account? <Link to="/">Login</Link> now.
                </div>
            </div>
        </div>
    );
};

export default Register;