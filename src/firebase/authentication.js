import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from "firebase/auth";
import {
    doc,
    setDoc
} from "firebase/firestore";
import { app, db, handleError } from ".";

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;

        await setDoc(doc(db, 'users', user.uid + ''), {
            uid: user.uid,
            name: user.displayName,
            authProvider: 'google',
            email: user.email,
            messages: [],
            favoriteMessages: []
        });
    }
    catch (err) {
        handleError(err);
    }
};

export const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
        handleError(err);
    }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        await setDoc(doc(db, 'users', user.uid + ''), {
            uid: user.uid,
            name: user.displayName,
            authProvider: 'google',
            email: user.email,
            messages: [],
            favoriteMessages: []
        });
    }
    catch (err) {
        handleError(err);
    }
};

export const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert('Password reset link sent!');
    }
    catch (err) {
        handleError(err);
    }
};

export const logout = () => {
    signOut(auth);
}