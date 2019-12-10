import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    let header;
    if (props.h1) {
        header = <h1 className="header__title">
            {props.title}
        </h1>
    } else {
        header = <h2 className="header__title">
            {props.title}
        </h2>
    }

    return (
        <div className="header">
            <Link to={'/'}>
                <img className="header__image" src='images/triangles.png'
                     alt="Logo Triangles"/>
            </Link>
            {header}
            <div className="header__line"/>
        </div>
    )
}

export default Header;