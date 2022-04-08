import Messages from "../../common/Messages";
import AddMessageButton from "../../common/AddMessageButton";

const AllMessages = ({ user }) => {
    return (
        <div className="AllMessages view">
            <Messages user={user}/>
            <AddMessageButton />
        </div>
    );
};

export default AllMessages;