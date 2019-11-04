import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {

    // let textHover = React.createRef();
    //
    // function chbg(color) {
    //     //need to somehow use refs instead of this
    //     // document.getElementById('test').style.backgroundColor = color;
    //     textHover.current.style.backgroundColor = color;
    // }

    const [hoverGallery, changeHoverGallery] = React.useState('var(--black)');
    const [hoverResources, changeHoverResources] = React.useState('var(--black)');
    const [hoverAbout, changeHoverAbout] = React.useState('block');
    const [hoverDatabase, changeHoverDatabase] = React.useState('block');
    const [hoverContact, changeHoverContact] = React.useState('block');

    let toggleHover2 = () => {
        if (hoverGallery === 'var(--black)') {
            changeHoverGallery('var(--blue)');
        } else if (hoverGallery === 'var(--blue)') {
            changeHoverGallery('var(--black)');
        }
    };

    let toggleHover4 = () => {
        if (hoverResources === 'var(--black)') {
            changeHoverResources('var(--blue)');
        } else if (hoverResources === 'var(--blue)') {
            changeHoverResources('var(--black)');
        }
    };

    let toggleHover1 = () => {
        if (hoverAbout === 'block') {
            changeHoverAbout('none');
        } else if (hoverAbout === 'none') {
            changeHoverAbout('block');
        }
    };
    // React.useEffect(
    let toggleHover3 = () => {
        if (hoverDatabase === 'block') {
            changeHoverDatabase('none');
        } else if (hoverDatabase === 'none') {
            changeHoverDatabase('block');
        }
    };
    // );
    let toggleHover5 = () => {
        if (hoverContact === 'block') {
            changeHoverContact('none');
        } else if (hoverContact === 'none') {
            changeHoverContact('block');
        }
    };

    let gallery = {
        borderTop: "90px solid " + hoverGallery
    };

    let resources = {
        borderTop: "90px solid " + hoverResources
    };

    let about = {
        display: hoverAbout
    };

    let database = {
        display: hoverDatabase
    };

    let contact = {
        display: hoverContact
    };

    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__tri nav__tri--up">
                    <NavLink className="nav__link nav__link--up"
                             activeClassName="active"
                             to="/about" onMouseOver={toggleHover1}
                             onMouseOut={toggleHover1}>About</NavLink>
                    <div className="nav__tri--after" style={about}></div>
                </div>
                <div className="nav__tri nav__tri--down" style={gallery}>
                    <NavLink className="nav__link nav__link--down"
                             activeClassName="active"
                             to="/gallery" onMouseOver={toggleHover2}
                             onMouseOut={toggleHover2}>Gallery</NavLink>
                </div>
                <div className="nav__tri nav__tri--up nav__tri--left">
                    <NavLink className="nav__link nav__link--up"
                             activeClassName="active"
                             to="/database" onMouseOver={toggleHover3}
                             onMouseOut={toggleHover3}>Database</NavLink>
                    <div className="nav__tri--after" style={database}></div>
                </div>
                <div className="nav__tri nav__tri--down" style={resources}>
                    <NavLink className="nav__link nav__link--down"
                             activeClassName="active"
                             to="/resources" onMouseOver={toggleHover4}
                             onMouseOut={toggleHover4}>Resources</NavLink>
                </div>
                <div className="nav__tri nav__tri--up nav__tri--left">
                    <NavLink className="nav__link nav__link--up"
                             activeClassName="active"
                             to="/contact" onMouseOver={toggleHover5}
                             onMouseOut={toggleHover5}>Contact</NavLink>
                    <div className="nav__tri--after" style={contact}></div>
                </div>
            </div>
            <h1 className="nav__title">The Virgin Forest Project</h1>
        </nav>
    )
}

export default Nav;