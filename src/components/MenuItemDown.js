import React from 'react';
import {NavLink} from 'react-router-dom';

function MenuItemDown(props) {

    const [hoverBorder, changeBorder] = React.useState('var(--black)');

    let toggleHover = () => {
        if (hoverBorder === 'var(--black)') {
            changeBorder('var(--blue)');
        } else if (hoverBorder === 'var(--blue)') {
            changeBorder('var(--black)');
        }
    };

    let styling = {
        borderTop: "90px solid " + hoverBorder
    };

    let navLink = "/" + props.link;

    return(
        <div className="nav__tri nav__tri--down" style={styling}>
            <NavLink className="nav__link nav__link--down"
                     activeClassName="active"
                     to={navLink} onMouseOver={toggleHover}
                     onMouseOut={toggleHover}>{props.link}</NavLink>
        </div>
    )
}

export default MenuItemDown;