import React from 'react';
import Nav from "./Nav";
import BlackBox from "./BlackBox";
import Footer from "./Footer";
import fire from "./Fire";
import ScrollSection from "./ScrollSection";

function Forest(props) {

    const [values, setValues] = React.useState({
        id: props.match.params.id,
        name: "",
        state: "",
        description: "",
        location: "",
        mainPic: "",
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
                    mainPic: doc.data().mainPic,
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

    let facts;
    facts = <ScrollSection facts="true" bottom="facts" forestId={props.match.params.id}/>

    let media;
    if (values.videoUrl !== "") {
        media = <div className="forest__mediaDiv">
            <iframe src={values.videoUrl} title={values.name}
                    className="forest__media" frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen/>
        </div>
    } else {
        media = <ScrollSection gallery="true" bottom="gallery"
                               forestId={values.id}/>
    }

    //CONTENT
    let bg1 = {
        backgroundImage: "url('" + values.mainPic + "')"
    };

    return (
        <div>
            <Nav/>
            <div className="background nav__padding" style={bg1}>
                <div className="background__filter">
                    <div className="background__full">
                        <div
                            className="background__half background__half--content">
                            <BlackBox title={values.name} h1="true"
                                      body={values.description}
                                      forest={values}/>
                        </div>
                    </div>
                    {facts}
                    {media}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Forest;