import Messages from "../../common/Messages";
import { where } from "@firebase/firestore";
import AddMessageButton from "../../common/AddMessageButton";

const UserMessages = ({ user }) => {
    return (
        <div className="UserMessages view">
            <Messages user={user} filter={where('userId', '==', user.uid + '')}/>
            <AddMessageButton />
        </div>
    );
};

export default UserMessages;