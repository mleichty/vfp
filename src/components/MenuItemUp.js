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

    //Why didn't UseEffect work here?
    //said need a dependency if changing state in useEffect
    // React.useEffect(() => {
    //     if (props.triStyle === "triLeft") {
    //         changeTriStyles({
    //             marginLeft: "-60px"
    //         });
    //     }
    // });

    let navLink = "/" + props.link;

    return(
        <div className="nav__tri nav__tri--up" style={triStyles}>
            <NavLink className="nav__link nav__link--up"
                     activeClassName="active"
                     to={navLink} onMouseOver={toggleHover}
                     onMouseOut={toggleHover}>{props.link}</NavLink>
            <div className="nav__tri--after" style={display}></div>
        </div>
    )
}

export default MenuItemUp;