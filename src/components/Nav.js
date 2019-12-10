import React from 'react';
import MenuItemUp from "./MenuItemUp";
import MenuItemDown from "./MenuItemDown";

function Nav(props) {
    let display;

    if(props.home === "homePage") {
        display = {
            display: "block"
        }
    } else {
        display = {
            display: "none"
        }
    }

    return (
        <nav className="nav">
            <div className="nav__container">
                <MenuItemUp link={"About"}/>
                <MenuItemDown link={"Gallery"}/>
                <MenuItemUp triStyle={"triLeft"} link={"Database"}/>
                <MenuItemDown link={"Resources"}/>
                <MenuItemUp triStyle={"triLeft"} link={"Contact"}/>
            </div>
            <h1 className="nav__title" style={display}>The Virgin Forest Project</h1>
        </nav>
    )
}

export default Nav;