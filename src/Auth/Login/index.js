import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase/authentication';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';

import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // do something
            return;
        }
        if (user) {
            navigate('/app/all');
        }
    }, [user, loading, navigate]);

    return (
        <div className="Login">
            <div className="login-container">
                <input 
                    type='text'
                    className='login-field'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='E-mail Address'
                />
                <input 
                    type='password'
                    className='login-field'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <button 
                    className='login-btn'
                    onClick={() => signInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <button
                    className='login-btn google-btn'
                    onClick={() => signInWithGoogle()}
                >
                    Sign in with Google
                </button>
                <Link to="/register">Register</Link>
                <Link to="/reset">Reset Password</Link>
            </div>
        </div>
    );
};

export default Login;