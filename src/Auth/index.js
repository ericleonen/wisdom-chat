import { Outlet } from "react-router-dom";
import { auth } from "../firebase/authentication";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

import "./Auth.css";

const Auth = () => {
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
        <div className="Auth">
            <Outlet />
        </div>
    );
};

export default Auth;