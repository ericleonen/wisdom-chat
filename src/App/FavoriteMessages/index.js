import Messages from "../../common/Messages";
import { where } from "@firebase/firestore";

const FavoriteMessages = ({ user }) => {
    return (
        <div className="FavoriteMessages view">
            <Messages user={user} filter={where('favoriteUsers', 'array-contains', user.uid + '')} />
        </div>
    );
};

export default FavoriteMessages;