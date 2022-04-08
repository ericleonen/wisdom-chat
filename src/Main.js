import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/authentication";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import App from './App';
import Auth from './Auth';
import { Routes, Route } from "react-router-dom";
import AllMessages from './App/AllMessages';
import UserMessages from './App/UserMessages';
import FavoriteMessages from "./App/FavoriteMessages";
import AddMessage from "./App/AddMessage";
import Login from './Auth/Login';
import Register from './Auth/Register';
import Reset from './Auth/Reset';
import Records from "./App/Records";

const Main = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
      if (!user && !loading) {
          navigate('/');
      }
    }, [user, navigate]);
    return (
        <Routes>
            <Route path="/auth" element={<Auth />}>
                <Route path="login" element={<Login user={user}/>} />
                <Route path="register" element={<Register user={user}/>} />
                <Route path="reset" element={<Reset user={user}/>} />
            </Route>
            <Route path="/app" element={<App ready={!!user}/>}>
                <Route path="all" element={<AllMessages user={user}/>} />
                <Route path="user" element={<UserMessages user={user}/>} />
                <Route path="favorites" element={<FavoriteMessages user={user}/>} />
                <Route path="records" element={<Records user={user} />} />
                <Route path="share" element={<AddMessage user={user}/>} />
            </Route>
        </Routes>
    );
};

export default Main;