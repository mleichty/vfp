import React from 'react';
import Nav from "./Nav";
import BlackBox from "./BlackBox";
import Footer from "./Footer";

function Resources() {

    //CONTENT
    let bg1 = {
        backgroundImage: "url('images/Forest7.jpg')"
    };

    let resources_title = "Related Resources";
    let section1_body1 = "Below is a list of resources relevant to old growth forests and forests in general.";

    return (
        <div>
            <Nav/>
            <div className="background nav__padding" style={bg1}>
                <div className="background__filter">
                    <div className="background__full">
                        <div className="background__half background__half--content">
                            <BlackBox title={resources_title} h1="true"
                                      body={section1_body1} resources="true"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Resources;