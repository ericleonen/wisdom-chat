import { collection, doc, getDoc, setDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove, query } from "@firebase/firestore";
import { db, handleError } from ".";

export const addMessage = async (user, message) => {
    const dateId = Date.now() + '';

    try {
        await setDoc(doc(db, 'messages', dateId), {
            dateId,
            username: user.displayName,
            userId: user.uid,
            time: String(new Date()),
            message,
            favoriteUsers: []
        });

        await updateDoc(doc(db, 'users', user.uid + ''), {
            messages: arrayUnion(dateId + '')
        });
    }
    catch (err) {
        handleError(err);
    }
};

export const getMessageByDateId = async (messageDateId) => {
    const docRef = doc(db, 'messages', messageDateId + '');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    }
    else {
        return null;
    }
}

export const allMessagesListener = (setAllMessages, setLoadingMessages, filter) => {
    const q = filter ? query(collection(db, 'messages'), filter) : collection(db, 'messages');
    return () => {
        const unsubscribe = onSnapshot(q, (snap) => {
            setAllMessages([]);
            snap.docs.forEach(doc => {
                setAllMessages(prev => [...prev, doc.data()]);
            });
            setLoadingMessages(false);
        });

        return unsubscribe;
    }
};

export const toggleFavoriteMessage = async (userId, messageDateId) => {
    try {
        const userFavoriteMessages = await getUserFavoriteMessages(userId);

        if (userFavoriteMessages.indexOf(messageDateId + '') === -1) {
            await updateDoc(doc(db, 'messages', messageDateId + ''), {
                favoriteUsers: arrayUnion(userId + '')
            });

            await updateDoc(doc(db, 'users', userId + ''), {
                favoriteMessages: arrayUnion(messageDateId + '')
            });
        }
        else {
            await updateDoc(doc(db, 'messages', messageDateId + ''), {
                favoriteUsers: arrayRemove(userId + '')
            });

            await updateDoc(doc(db, 'users', userId + ''), {
                favoriteMessages: arrayRemove(messageDateId + '')
            });
        }
    }
    catch (err) {
        handleError(err);
    }
}

export const getMessageFavoriteUsers = async (messageDateId) => {
    const docRef = doc(db, 'messages', messageDateId + '');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().favoriteUsers || [];
    }
    else {
        return [];
    }
};

export const getUserFavoriteMessages = async (userId) => {
    const docRef = doc(db, 'users', userId + '');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().favoriteMessages || [];
    }
    else {
        return [];
    }
};