import Messages from "../../common/Messages";
import { orderBy } from "firebase/firestore"

const Records = ({ user }) => {
    return (
        <div className="Records view">
            <Messages user={user} filter={orderBy('favoriteUsers', 'desc')} limit={5} />
        </div>
    );
};

export default Records;