import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../../store';
import { useSelector } from 'react-redux';
import { selectIsSideBar } from '../../store';
import { useLocation } from 'react-router-dom';

import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const dispatch = useDispatch();

    const location = useLocation();
    const isSideBar = useSelector(selectIsSideBar);

    return (
        <div className="Header">
            <button className="menu-btn" onClick={() => dispatch(toggleSideBar())}>
                <FontAwesomeIcon icon={isSideBar ? faXmark : faBars} className="menu-icon"/>
            </button>
            <h1 className="header-title">{location.pathname.split('/').pop()}</h1>
        </div>
    );
};

export default Header;