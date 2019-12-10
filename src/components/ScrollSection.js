import React from 'react';
import $ from "jquery";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import fire from "./Fire";

function ScrollSection(props) {

    const [forests, updateForests] = React.useState([]);
    const [gallery, updateGallery] = React.useState([]);
    const [submitted, changeSubmitted] = React.useState("");

    let db = fire.firestore();

    React.useEffect(() => {
        let newForests = [];

        function handleStatusChange(status) {
            updateForests(status);
        }

        const unsubscribe = db.collection("forests").get().then(
            function (snapshot) {
                snapshot.forEach(
                    function (doc) {
                        let item = {
                            name: doc.data().name,
                            mainPic: doc.data().mainPic,
                            id: doc.id
                        };
                        newForests.push(item);
                    });

                handleStatusChange(newForests);
            });
        return () => unsubscribe;
    }, [submitted]);

    React.useEffect(() => {
        let newGallery = [];

        function handleStatusChange(status) {
            updateGallery(status);
        }

        const unsubscribe2 = db.collection("media").get().then(
            function (snapshot) {
                // let idx = 1;
                snapshot.forEach(
                    function (doc) {
                        let item = {
                            title: doc.data().image[0],
                            media: doc.data().image[1],
                            id: doc.id
                        };
                        newGallery.push(item);
                        // idx++;
                    });

                handleStatusChange(newGallery);
            });
        return () => unsubscribe2;
    }, [submitted]);

    let forestList = forests.map((forest, idx) => {
        return (
            <div key={idx} className="database__forest" style={{backgroundImage: "url('" + forest.mainPic + "')"}}>
                <h2 className="database__name">{forest.name}</h2>
            </div>
        )
    });

    let galleryList = gallery.map((media, idx) => {
        return (
            <div className="gallery" key={idx}>
                <div className="gallery__picDiv">
                    <img className="gallery__pic" src={media.media} alt=""/>
                    <h3 className="gallery__title">{media.title}</h3>
                </div>
            </div>
        )
    });

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
        bottom = {bottom: "250px"}
    } else if (props.bottom === "gallery") {
        let height = $(window).height() / 2;
        console.log(height);
        bottom = {bottom: height}
    }

    // let databasePic = {
    //     backgroundImage: "url('images/Forest5.jpg')"
    // };
    // let forestTitle = "Wesselman's Woods";

    let database;
    let leftMove;
    let rightMove;
    let toggleScroll;
    if (props.database) {
        database = forestList;
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

    if (props.gallery) {
        database = galleryList;
        leftMove = <div className="background__scroll background__scroll--left"
                        ref={boxLeft} style={bottom}
                        onClick={() => shiftLeft()}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} size="2x"/></div>;
        rightMove = <div className="background__scroll background__scroll--right"
                         ref={boxRight} style={bottom}
                         onClick={() => shiftRight()}>
            <FontAwesomeIcon icon={faAngleDoubleRight} size="2x"/></div>;
        toggleScroll = {
            overflowX: "hidden"
        }
    }

    return (
        <div className="background__full" style={toggleScroll} ref={left}
             onMouseOver={() => showBoxes()} onMouseOut={() => hideBoxes()}>
            {leftMove}
            {rightMove}
            {database}
        </div>
    )
}

export default ScrollSection;