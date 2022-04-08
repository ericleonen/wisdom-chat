import { useState, useEffect } from "react";
import { allMessagesListener } from "../../firebase/messages";
import Message from "../Message";
import Loader from "../Loader";

import "./Messages.css";

const Messages = ({ user, filter, limit }) => {
    const [messages, setMessages] = useState([]);
    const [loadingMessages, setLoadingMessages] = useState(true);

    useEffect(() => {
        const unsubscribe = allMessagesListener(setMessages, setLoadingMessages, filter)();
        return unsubscribe;
    }, []);
    
    return loadingMessages ? 
        <Loader /> : 
        (
            <div className="Messages">
                { 
                    messages.map(
                        (message, i) => 
                            <Message 
                                key={`message_${i}`}
                                message={message}
                                userId={user.uid}
                            />
                    ).slice(0, limit) 
                }
            </div>
        );
};

export default Messages;