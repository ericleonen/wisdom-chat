import { Link } from "react-router-dom";

import "./AddMessageButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";

const AddMessageButton = () => {
    return (
            <Link 
                to="/app/share" 
                style={{textDecoration:"none"}}
            >
                    <div className="AddMessageButton">
                        <FontAwesomeIcon icon={faFeatherPointed} />
                    </div>
            </Link>
    );
}

export default AddMessageButton;