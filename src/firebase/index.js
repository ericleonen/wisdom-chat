import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCosd4zWgBq7JgAmuYAZBiaKrdJfQax3Pg",
    authDomain: "wisdomchat-e9c11.firebaseapp.com",
    projectId: "wisdomchat-e9c11",
    storageBucket: "wisdomchat-e9c11.appspot.com",
    messagingSenderId: "827961648616",
    appId: "1:827961648616:web:c574fc881a4f213b75b05d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const handleError = (err) => {
    console.error(err);
    alert(err.message);
}