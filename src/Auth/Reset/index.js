import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { auth, sendPasswordReset } from '../../firebase/authentication';

import './Reset.css';

const Reset = () => {
    const [email, setEmail] = useState('');
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
    }, [user, loading]);

    return (
        <div className="Reset">
            <div className="reset-container">
                <input
                    type="text"
                    className="reset-field"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <button className="reset-btn" onClick={() => sendPasswordReset(email)}>
                    Send password reset email
                </button>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
};

export default Reset;