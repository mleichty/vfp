import React from 'react';
import MenuItemUp from "./MenuItemUp";
import MenuItemDown from "./MenuItemDown";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import {NavLink, Link} from 'react-router-dom';

function Nav(props) {
    const [toggle, changeToggle] = React.useState(true);
    const [mobileToggle, changeMobileToggle] = React.useState(true);
    // const nav = React.useRef(null);

    let display;
    if (props.home === "homePage") {
        display = {
            display: "block"
        }
    } else {
        display = {
            display: "none"
        }
    }

    const closeMenu = () => {
        changeToggle(false);
    };

    const openMenu = () => {
        changeToggle(true);
    };

    let desktopMenu;
    if (toggle) {
        desktopMenu = <div className="nav nav--full">
            <div className="nav__container">
                <MenuItemUp link={"home"}/>
                <MenuItemDown link={"about"}/>
                <MenuItemUp triStyle={"triLeft"} link={"gallery"}/>
                <MenuItemDown link={"database"}/>
                <MenuItemUp triStyle={"triLeft"} link={"resources"}/>
                <div className="nav__icon" onClick={() => closeMenu()}>
                    <FontAwesomeIcon icon={faTimes}/></div>
            </div>
            <h1 className="nav__title" style={display}>The Virgin Forest
                Project</h1>
        </div>
    } else {
        desktopMenu = <div className="nav nav--small">
                <span onClick={() => openMenu()}><MenuItemUp
                    menu="menu"/></span>
        </div>
    }

    const toggleMobile = () => {
        changeMobileToggle(!mobileToggle);
    };

    let mobileMenu;
    if(mobileToggle) {
        mobileMenu = {display: "none"}
    } else {
        mobileMenu = {display: "flex"}
    }

    return (
        <nav>
            {desktopMenu}
            <div className="nav__mobile">
                <Link to={'/'} className="nav__logoDiv">
                    <img className="nav__logo" src="images/vfp-logo.png"
                         alt=""/>
                </Link>
                <div className="nav__hamburgerDiv"
                     onClick={() => toggleMobile()}>
                    <FontAwesomeIcon icon={faBars} className="nav__hamburger"
                                     size='lg'/>
                </div>
                <div className="nav__mobileLinks" style={mobileMenu}>
                    <NavLink to="/home"
                             className="nav__mobileLink">Home</NavLink>
                    <NavLink to="/about"
                             className="nav__mobileLink">About</NavLink>
                    <NavLink to="/gallery"
                             className="nav__mobileLink">Gallery</NavLink>
                    <NavLink to="/database"
                             className="nav__mobileLink">Database</NavLink>
                    <NavLink to="/resources"
                             className="nav__mobileLink">Resources</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav;