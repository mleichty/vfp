import React from 'react';
import $ from "jquery";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import fire from "./Fire";
import {Link} from "react-router-dom";

function ScrollSection(props) {

    const [forests, updateForests] = React.useState([]);
    const [gallery, updateGallery] = React.useState([]);
    const [facts, updateFacts] = React.useState([]);
    const [forestMedia, updateForestMedia] = React.useState([]);
    const [forestId, updateForestId] = React.useState("");
    const [leftHeight, updateLeftHeight] = React.useState(0);
    const [submitted, changeSubmitted] = React.useState("");

    let db = fire.firestore();

    React.useEffect(() => {
        if (props.forestId) {
            updateForestId(props.forestId);
        }

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

    let forestList = forests.map((forest, idx) => {
        return (
            <Link to={"/" + forest.id} key={idx} className="database__forest"
                  style={{backgroundImage: "url('" + forest.mainPic + "')"}}>
                <h2 className="database__name">{forest.name}</h2>
            </Link>
        )
    });

    React.useEffect(() => {
        let newGallery = [];

        function handleStatusChange(status) {
            updateGallery(status);
        }

        //add if statement here whether to get all media or id media
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

    let galleryList = gallery.map((media, idx) => {
        return (
            <div className="gallery nav__padding" key={idx}>
                <div className="gallery__picDiv">
                    <img className="gallery__pic" src={media.media} alt=""/>
                    <h3 className="gallery__title">{media.title}</h3>
                </div>
            </div>
        )
    });

    React.useEffect(() => {
        let newForestMedia = [];

        function handleStatusChange(status) {
            updateForestMedia(status);
        }

        const unsubscribe4 = db.collection("media").where("id", "==", forestId).get().then(
            function (snapshot) {
                snapshot.forEach(
                    function (doc) {
                        let item = {
                            title: doc.data().image[0],
                            image: doc.data().image[1]
                        };
                        newForestMedia.push(item);
                    });

                handleStatusChange(newForestMedia);
            });
        // console.log(forestId);

        return () => unsubscribe4;
    }, [forestId]);

    let forestMediaList = forestMedia.map((image, idx) => {
        return (
            <div className="gallery gallery--forest" key={idx}>
                <div className="gallery__picDiv">
                    <img className="gallery__pic" src={image.image} alt=""/>
                    <h3 className="gallery__title">{image.title}</h3>
                </div>
            </div>
        )
    });

    React.useEffect(() => {
        let newFacts = [];

        function handleStatusChange(status) {
            updateFacts(status);
        }

        const unsubscribe3 = db.collection("history").where("id", "==", forestId).get().then(
            function (snapshot) {
                snapshot.forEach(
                    function (doc) {
                        let item = {
                            year: doc.data().fact[0],
                            fact: doc.data().fact[1]
                        };
                        newFacts.push(item);
                    });

                handleStatusChange(newFacts);
            });
        // console.log(forestId);

        return () => unsubscribe3;
    }, [forestId]);

    let factList = facts.map((fact, idx) => {
        return (
            <div key={idx} className="forest__fact">
                <h2>{fact.year}</h2>
                <p>{fact.fact}</p>
            </div>
        )
    });

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
        bottom = {bottom: "250px"}
    } else if (props.bottom === "gallery") {
        let height = $(window).height() / 2;
        // console.log(height);
        bottom = {bottom: height}
    } else if (props.bottom === "facts") {
        let height = leftHeight / 2 + $(window).height();
        bottom = {bottom: height};
    }

    // let databasePic = {
    //     backgroundImage: "url('images/Forest5.jpg')"
    // };
    // let forestTitle = "Wesselman's Woods";

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