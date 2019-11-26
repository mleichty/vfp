import React from 'react';

function Header(props) {
    let header;
    if(props.h1) {
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
            <img className="header__image" src='/images/triangles.png'
                 alt="Logo Triangles"/>
            {header}
            <div className="header__line"/>
        </div>
    )
}

export default Header;