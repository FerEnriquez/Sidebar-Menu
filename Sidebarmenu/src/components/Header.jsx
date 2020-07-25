import React from "react";
import { Link } from 'react-router-dom';

const Header = props => {
    const {menuState, setMenuState} = props;
    return (
    <header className="site-header">
        <div className="brand-icon">
            <Link to="/">
                <div className="icon">
                    <i className="fab fa-react"></i>
                </div>
                <span>FrontendFunn</span>
            </Link>
        </div>
        <div>
            <button 
            className={`menu-trigger ${menuState ? 'menu-close' : ''}`}
            onClick={() => setMenuState(!menuState)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
    );
};

export default Header;