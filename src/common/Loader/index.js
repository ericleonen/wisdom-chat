import "./Loader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
    return (
        <div className="Loader">
            <FontAwesomeIcon icon={faCircleNotch} className="spinner" />
            <p>Loading wisdom...</p>
        </div>
    );
};

export default Loader;