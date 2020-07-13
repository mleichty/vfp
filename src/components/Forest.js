import React from 'react';
import Nav from "./Nav";
import BlackBox from "./BlackBox";
import Footer from "./Footer";
import ScrollSection from "./ScrollSection";
import Load from "./Load";
import {useSelector} from "react-redux";

function Forest(props) {

    const forests = useSelector(state => state.forestsFire);
    const forest = forests.find(forest => forest.id === props.match.params.id);

    let load;
    if (forest) {
        let media;
        if (forest.videoUrl !== "") {
            media = <div className="forest__mediaDiv">
                <iframe src={forest.videoUrl} title={forest.name}
                        className="forest__media" frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen/>
            </div>
        } else {
            media = <ScrollSection gallery="true" bottom="gallery"
                                   forestId={forest.id}/>
        }

        //CONTENT
        let bg1 = {
            backgroundImage: "url('" + forest.mainPic + "')"
        };

        load = <div className="background nav__padding" style={bg1}>
            <div className="background__filter">
                <div className="background__full">
                    <div
                        className="background__half background__half--content">
                        <BlackBox title={forest.name} h1="true"
                                  body={forest.description}
                                  forest={forest}/>
                    </div>
                </div>
                <ScrollSection facts="true" bottom="facts" forestId={props.match.params.id}/>
                {media}
            </div>
        </div>
    } else {
        load = <Load/>;
    }

    return (
        <div>
            <Nav/>
            {load}
            <Footer/>
        </div>
    )
}

export default Forest;