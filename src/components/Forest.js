import React from 'react';
import Nav from "./Nav";
import BlackBox from "./BlackBox";
import Footer from "./Footer";
import fire from "./Fire";
import ScrollSection from "./ScrollSection";

function Forest(props) {

    const [values, setValues] = React.useState({
        name: "",
        state: "",
        description: "",
        location: "",
        size: "",
        flora: "",
        fauna: "",
        threats: "",
        habitats: "",
        source: "",
        videoUrl: ""
    });

    const [submitted, changeSubmitted] = React.useState("");

    let db = fire.firestore();

    React.useEffect(() => {
        function handleStatusChange(status) {
            setValues(status);
        }

        const unsubscribe = db.collection("forests").doc(props.match.params.id).get().then(
            function (doc) {
                let forest = {
                    id: doc.id,
                    name: doc.data().name,
                    state: doc.data().state,
                    description: doc.data().description,
                    location: doc.data().location,
                    size: doc.data().size,
                    flora: doc.data().flora,
                    fauna: doc.data().fauna,
                    threats: doc.data().threats,
                    habitats: doc.data().habitats,
                    source: doc.data().source,
                    videoUrl: doc.data().videoUrl
                };

                handleStatusChange(forest);
            });
        return () => unsubscribe;
    }, [submitted]);

    let media;
    //how does he want to do this? if video url doesn't exist? Or if id has media?
    if (values.videoUrl !== "") {
        media = <div className="forest__mediaDiv">
            <iframe src={values.videoUrl} title={values.name}
                    className="forest__media" frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen/>
        </div>
    } else {
        media = <ScrollSection gallery="true" bottom="gallery" forestId={props.match.params.id}/>
    }

    //CONTENT
    let bg1 = {
        backgroundImage: "url('images/Forest7.jpg')"
    };

    return (
        <div>
            <Nav/>
            <div className="background nav__padding" style={bg1}>
                <div className="background__filter">
                    <div className="background__full">
                        {/*<div className="background__half"/>*/}
                        <div
                            className="background__half background__half--content">
                            <BlackBox title={values.name} h1="true"
                                      body={values.description}
                                      forest={values}/>
                        </div>
                    </div>
                    <ScrollSection facts="true" bottom="facts"
                                   forestId={props.match.params.id}/>
                    {media}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Forest;