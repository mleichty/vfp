import React from 'react';
import $ from "jquery";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Load from "./Load";

function ScrollSection(props) {

    const [leftHeight, updateLeftHeight] = React.useState(0);
    const forests = useSelector(state => state.forestsFire);
    const gallery = useSelector(state => state.mediaFire);
    const facts = useSelector(state => state.historyFire);

    //MAP DATABASE ITEMS
    let forestMediaList;
    let factList;
    if (props && props.forestId) {
        //stored id as forestId in redux, use filter not find to create array
        let forestMedia = gallery.filter(media => media.forestId === props.forestId);
        let forestFacts = facts.filter(fact => fact.forestId === props.forestId).sort((a,b) => {
                return a.year - b.year;
            }
        );

        if(forestMedia) {
            forestMediaList = forestMedia.map((image, idx) => {
                return (
                    <div className="gallery gallery--forest" key={idx}>
                        <div className="gallery__picDiv">
                            <img className="gallery__pic" src={image.media} alt=""/>
                            <h3 className="gallery__title">{image.title}</h3>
                        </div>
                    </div>
                )
            });
        } else {
            forestMediaList = <Load/>
        }

        if(forestFacts) {
            factList = forestFacts.map((fact, idx) => {
                return (
                    <div key={idx} className="forest__fact">
                        <h2>{fact.year}</h2>
                        <p>{fact.fact}</p>
                    </div>
                )
            });
        } else {
            factList = <Load/>
        }
    }

    let forestList = forests.map((forest, idx) => {
        return (
            <Link to={"/" + forest.id} onClick={() => {$(window).scrollTop(0);}} key={idx} className="database__forest"
                  style={{backgroundImage: "url('" + forest.mainPic + "')"}}>
                <h2 className="database__name">{forest.name}</h2>
            </Link>
        )
    });

    let galleryList = gallery.map((media, idx) => {
        return (
            <div className="gallery nav__padding" key={idx}>
                <div className="gallery__picDiv">
                    <div className="gallery__imageDiv">
                    <img className="gallery__pic" src={media.media} alt=""/>
                    </div>
                    <h3 className="gallery__title">{media.title}</h3>
                </div>
            </div>
        )
    });

    //CREATE SCROLL EFFECT
    const left = React.useRef(null);
    const boxLeft = React.useRef(null);
    const boxRight = React.useRef(null);

    const showBoxes = () => {
        updateLeftHeight($(left.current).height());

        if ($(window).width() > 980) {
            // console.log(leftHeight);
            $(boxLeft.current).css({
                display: "block"
            });
            $(boxRight.current).css({
                display: "block"
            });
        }
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

    const shiftLeft = () => {
        let width = $(left.current).scrollLeft() - $(window).width();
        $(left.current).animate({scrollLeft: width}, 500, 'linear');
    };

    const scrollRight = () => {
        $(left.current).animate({scrollLeft: '+=100'}, 200, 'linear', scrollRight);
    };

    const shiftRight = () => {
        let width = $(left.current).scrollLeft() + $(window).width();
        $(left.current).animate({scrollLeft: width}, 500, 'linear');
    };

    const scrollStop = () => {
        $(left.current).stop();
    };

    let bottom;
    if (props.bottom === "database") {
        let height = $(window).height() / 2;
        bottom = {bottom: height}
    } else if (props.bottom === "gallery") {
        let height = $(window).height() / 2;
        // console.log(height);
        bottom = {bottom: height}
    } else if (props.bottom === "facts") {
        let height = leftHeight / 2 + $(window).height();
        bottom = {bottom: height};
    }

    //ASSIGN VALUES BASED ON PROPS
    let database;
    let leftMove;
    let rightMove;
    let toggleScroll;
    if (props.database || props.facts) {
        leftMove =
            <div className="background__scroll background__scroll--left"
                 ref={boxLeft} style={bottom}
                 onMouseOver={() => scrollLeft()}
                 onMouseOut={() => scrollStop()}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} size="2x"/></div>;
        rightMove =
            <div className="background__scroll background__scroll--right"
                 ref={boxRight} style={bottom}
                 onMouseOver={() => scrollRight()}
                 onMouseOut={() => scrollStop()}>
                <FontAwesomeIcon icon={faAngleDoubleRight} size="2x"/></div>;
        toggleScroll = {
            overflowX: "auto",
            marginBottom: "-20px"
        }
    }

    if (props.database) {
        database = forestList;
    }

    if (props.facts) {
        database = factList;
    }

    if (props.gallery) {
        if (props.forestId) {
            database = forestMediaList;
        } else {
            database = galleryList;
        }
        leftMove = <div className="background__scroll background__scroll--left"
                        ref={boxLeft} style={bottom}
                        onClick={() => shiftLeft()}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} size="2x"/></div>;
        rightMove =
            <div className="background__scroll background__scroll--right"
                 ref={boxRight} style={bottom}
                 onClick={() => shiftRight()}>
                <FontAwesomeIcon icon={faAngleDoubleRight} size="2x"/></div>;
        toggleScroll = {
            overflowX: "hidden"
        }
    }

    return (
        <div className="background__scrollDiv" style={toggleScroll} ref={left}
             onMouseOver={() => showBoxes()} onMouseOut={() => hideBoxes()}>
            {leftMove}
            {rightMove}
            {database}
        </div>
    )
}

export default ScrollSection;