import { useState } from "react";
import { addMessage } from "../../firebase/messages";

import "./AddMessage.css";

const AddMessage = ({ user }) => {
    const [message, setMessage] = useState('');

    const addNewMessage = () => {
        addMessage(user, message);
        setMessage('');
    }

    const onChange = (e) => {
        setMessage(e.target.value);
        
        e.target.style.height = "min-content";
        e.target.style.height = e.target.scrollHeight + 'px';
    }

    return (
        <div className="AddMessage view">
            <textarea 
                className="add-message-field"
                value={message}
                onChange={onChange}
                placeholder={`${user.displayName}, what is your wisdom today?`}
                maxLength="280"
            />
            <div className="add-message-footer">
                { message.length > 0 && 
                    <p className="add-message-char-count">
                        {message.length}/280
                    </p>
                }
                <button 
                    className="add-message-btn"
                    onClick={addNewMessage}
                    disabled={message.length === 0}
                >
                    Share Wisdom
                </button>
            </div>
        </div>
    );
};

export default AddMessage;