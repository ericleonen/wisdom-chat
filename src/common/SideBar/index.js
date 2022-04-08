import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../store";
import { useSelector } from "react-redux";
import { selectIsSideBar } from "../../store";

import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUser, faStar, faFeatherPointed, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

const SideBar = () => {
    const isSideBar = useSelector(selectIsSideBar);
    const location = useLocation();
    const isLinkSelected = (view) => location.pathname.indexOf(view) !== -1;

    const dispatch = useDispatch();

    return (
        <CSSTransition 
            in={isSideBar} 
            timeout={100} 
            unmountOnExit
            classNames="SideBar"
        >
            <div className="SideBar">
                <Link 
                    to="/app/all" 
                    style={{textDecoration:"none"}}
                    onClick={() => dispatch(toggleSideBar())}
                    className="view-selector" 
                    id={isLinkSelected('all') ? 'selected' : ''}
                >
                    <FontAwesomeIcon icon={faMessage} className="view-icon" />
                    All Messages
                </Link>
                <Link 
                    to="/app/user" 
                    style={{textDecoration:"none"}}
                    onClick={() => dispatch(toggleSideBar())}
                    className="view-selector" 
                    id={isLinkSelected('user') ? 'selected' : ''}
                >
                    <FontAwesomeIcon icon={faUser} className="view-icon" />
                    My Messages
                </Link>
                <Link 
                    to="/app/favorites" 
                    style={{textDecoration:"none"}}
                    onClick={() => dispatch(toggleSideBar())}
                    className="view-selector" 
                    id={isLinkSelected('favorites') ? 'selected' : ''}
                >
                    <FontAwesomeIcon icon={faStar} className="view-icon" />
                    Favorites
                </Link>
                <Link 
                    to="/app/records" 
                    style={{textDecoration:"none"}}
                    onClick={() => dispatch(toggleSideBar())}
                    className="view-selector" 
                    id={isLinkSelected('records') ? 'selected' : ''}
                >
                    <FontAwesomeIcon icon={faTrophy} className="view-icon" />
                    Records
                </Link>
                <Link 
                    to="/app/share" 
                    style={{textDecoration:"none"}}
                    onClick={() => dispatch(toggleSideBar())}
                    className="view-selector" 
                    id={isLinkSelected('share') ? 'selected' : ''}
                >
                    <FontAwesomeIcon icon={faFeatherPointed} className="view-icon" />
                    Share Message
                </Link>
            </div>
        </CSSTransition>
    );
};

export default SideBar;