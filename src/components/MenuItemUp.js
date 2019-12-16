import React from 'react';
import {NavLink} from 'react-router-dom';

function MenuItemUp(props) {

    const [hoverDisplay, changeDisplay] = React.useState('block');
    // const [triStyles, changeTriStyles] = React.useState({marginLeft: "-60px"});

    let toggleHover = () => {
        if (hoverDisplay === 'block') {
            changeDisplay('none');
        } else if (hoverDisplay === 'none') {
            changeDisplay('block');
        }
    };

    let display = {
        display: hoverDisplay
    };

    let triStyles;

    if (props.triStyle === "triLeft") {
        triStyles = {marginLeft: "-60px"};
    }

    let menu;
    if (props.link) {
        menu = <NavLink className="nav__link nav__link--up"
                        activeClassName="active"
                        to={"/" + props.link} onMouseOver={toggleHover}
                        onMouseOut={toggleHover}>{props.link}</NavLink>
    } else {
        menu =
            <p className="nav__link nav__link--up nav__link--small" onMouseOver={toggleHover}
                 onMouseOut={toggleHover}>
                Menu
            </p>
    }

    return (
        <div className="nav__tri nav__tri--up" style={triStyles}>
            {menu}
            <div className="nav__tri--after" style={display}/>
        </div>
    )
}

export default MenuItemUp;