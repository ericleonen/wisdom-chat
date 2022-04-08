import { useEffect, useState } from "react";
import { toggleFavoriteMessage } from "../../firebase/messages";
import { formatDate } from "../../utils";

import "./Message.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClock, faCopy } from "@fortawesome/free-solid-svg-icons";

const Message = ({ message, userId }) => {
    const [isUserFavorited, setIsUserFavorited] = useState(false);

    const isUserMessage = () => userId === message.userId;

    const onFavoriteMessage = () => {
        toggleFavoriteMessage(userId, message.dateId);
        setIsUserFavorited(prev => !prev);
    }

    useEffect(() => {
        setIsUserFavorited(message.favoriteUsers.indexOf(userId + '') !== -1);
    }, [setIsUserFavorited, message, userId]);

    return (
        <div className={"Message " + (isUserMessage() ? "userMessage" : "")}>
            <div className="message-head">
                <p className="message-user">{message.username}</p>
            </div>
            <div className="message-body">
                <p className="message-text">{message.message}</p>
            </div>
            <div className="message-footer">
                <div className="message-favorites">
                    <label>
                        <input 
                            type="checkbox"
                            className="favorite-checkbox"
                            onChange={onFavoriteMessage}
                            checked={isUserFavorited}
                        />
                        <div>
                            <FontAwesomeIcon icon={faHeart} className="footer-icon"/>
                            {message.favoriteUsers.length}
                        </div>
                    </label>
                </div>
                <div className="message-copy">
                    <FontAwesomeIcon icon={faCopy} className="footer-icon"/>
                </div>
                <div className="message-time">
                    <FontAwesomeIcon icon={faClock} className="footer-icon"/>
                    {formatDate(message.time)}
                </div>
            </div>
        </div>
    );
};

export default Message;