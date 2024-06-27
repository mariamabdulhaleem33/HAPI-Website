import React, { useState, forwardRef, RefObject, MouseEvent } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from '../images/LOGOFILLED.png';
import menu from "../images/MENUFRAME.png"; 

interface NavBarProps {
    initialActiveTab: string;
}

const NavBar = forwardRef<HTMLDivElement, NavBarProps>((props, ref) => {
    const [t, i18n] = useTranslation("global");
    const [activeTab, setActiveTab] = useState<string>(props.initialActiveTab);
    const navigate = useNavigate();

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
            .then(() => console.log(`Language changed to ${lang}`))
            .catch((err) => console.error(`Failed to change language to ${lang}:`, err));
    };

    const handleButtonClick = () => {
        navigate('/About#con');
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed">
            <div className="nav-content" ref={ref as RefObject<HTMLDivElement>}>
                <div className="nav-cont-left">
                    <Link to="/" className="nav-brand" style={{ textDecoration: "none" }}>
                        <img src={logo} alt="HAPI logo" height="100%" />
                    </Link>
                    <ul className="nav-links">
                        <NavLink className={activeTab === 'home' ? 'active' : 'tab'} to="/" style={{ textDecoration: "none" }} onClick={() => handleTabClick('home')}>
                            {t("NavBar.link1")}
                        </NavLink>
                        <NavLink className={activeTab === 'library' ? 'active' : 'tab'} to="/Library" style={{ textDecoration: "none" }} onClick={() => handleTabClick('library')}>
                            {t("NavBar.link2")}
                        </NavLink>
                        <NavLink className={activeTab === 'about' ? 'active' : 'tab'} to="/About" style={{ textDecoration: "none" }} onClick={() => handleTabClick('about')}>
                            {t("NavBar.link3")}
                        </NavLink>
                    </ul>
                </div>
                <div className="nav-cont-right">
                    <button onClick={handleButtonClick} className="get-started-but">{t("NavBar.button")}</button>
                    {/* <button onClick={() => handleChangeLanguage("en")}>en</button> */}
                    {/* <button onClick={() => handleChangeLanguage("ar")}>ar</button> */}
                </div>

                <div id="side" className="btn-group dropdown">
                    <button type="button" style={{margin:"auto",marginBottom:"10px", height:"40px"}} className="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={menu} style={{}}/> 
                    </button>
                    <ul className="dropdown-menu custom-dropdown-menu">
                        <li><Link style={{textDecoration:"none"}} className="dropdown-item" type="button" to="/">{t("NavBar.link1")}</Link></li>
                        <li><Link style={{textDecoration:"none"}} className="dropdown-item" type="button" to="/Library">{t("NavBar.link2")}</Link></li>
                        <li><Link style={{textDecoration:"none"}} className="dropdown-item" type="button" to="/About">{t("NavBar.link3")}</Link></li>
                        <hr style={{ width: "70%", margin: "auto" }} />
                        {/* <li className="dropdown-submenu mt-3">
                            <a style={{ color: "#016451" }} className="dropdown-item dropdown-toggle">
                                <span style={{ backgroundColor: "#E7DEB3", color: "#016451", borderRadius: "10px", padding: "5px" }}>Language</span>
                            </a>
                            <ul className="dropdown-menu custom-dropdown-menu">
                                <li><a className="dropdown-item" href="/" onClick={(e: MouseEvent) => { e.preventDefault(); handleChangeLanguage('en'); }}>English</a></li>
                                <li><a className="dropdown-item" href="/" onClick={(e: MouseEvent) => { e.preventDefault(); handleChangeLanguage('ar'); }}>Arabic</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
});

export default NavBar;
