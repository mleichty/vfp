import React from 'react';
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function ScrollSection(props) {

    const left = React.useRef(null);

    const boxLeft = React.useRef(null);
    const boxRight = React.useRef(null);

    const showBoxes = () => {
        $(boxLeft.current).css({
            display: "block"
        });
        $(boxRight.current).css({
            display: "block"
        });
    };

    const hideBoxes = () => {
        $(boxLeft.current).css({
            display: "none"
        });
        $(boxRight.current).css({
            display: "none"
        })
    };

    const scrollLeft = () => {
        $(left.current).animate({scrollLeft: '-=100'}, 200, 'linear', scrollLeft);
    };

    const scrollRight = () => {
        $(left.current).animate({scrollLeft: '+=100'}, 200, 'linear', scrollRight);
    };

    const scrollStop = () => {
        $(left.current).stop();
    };

    let database;
    if(props.database) {
        database = <img className="database__pic" src="images/Forest5.jpg" alt=""/>
    }

    let bottom;
    if(props.bottom === "database") {
        bottom = {bottom:"250px"}
    } else if (props.bottom === "gallery") {
        bottom = {bottom:"50%"}
    }

    let gallery;
    if(props.gallery) {
        gallery = <div className="gallery">
            <img className="gallery__pic" src="images/Forest5.jpg" alt=""/>
            <h3 className="gallery__title">Wesselman's woods</h3>
        </div>
    }

    return (
        <div className="background__full background__full--scroll" ref={left} onMouseOver={() => showBoxes()} onMouseOut={() => hideBoxes()}>
            <div className="background__scroll background__scroll--left" ref={boxLeft} style={bottom}
                 onMouseOver={() => scrollLeft()} onMouseOut={() => scrollStop()}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} size="2x"/></div>
            <div className="background__scroll background__scroll--right" ref={boxRight} style={bottom}
                 onMouseOver={() => scrollRight()} onMouseOut={() => scrollStop()}>
                <FontAwesomeIcon icon={faAngleDoubleRight} size="2x"/></div>
            {database}
            {database}
            {database}
            {database}
            {gallery}
            {gallery}
            {gallery}
            {gallery}
        </div>
    )
}

export default ScrollSection;