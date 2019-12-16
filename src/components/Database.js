import React from 'react';
import Nav from "./Nav";
import BlackBox from "./BlackBox";
import Footer from "./Footer";
import ScrollSection from "./ScrollSection";

function Database() {

    //CONTENT
    let bg1 = {
        backgroundImage: "url('images/Forest3.jpg')"
    };

    let database_title = "The Virgin Forest Project Database";
    let section1_body1 = "This newly launched database contains information and artwork related to virgin forests in the eastern United States. It will hopefully grow into a substantial and diverse collection of creative expression that reflects the vitality of untouched forests and the importance of their presence in the american landscape and in our cultural imagination.";
    let section1_body2 = "Old growth forests are a refuge that can provide relief from our stressful, overly technical daily existence. This database will showcase work that helps to promote and interpret virgin forests that somehow avoided the fate of so much of America’s woodlands.";
    let section1_body3 = "If you have produced artwork (films, photographs, paintings, drawings) of an American Virgin Forest east of the Mississippi, please consider submitting your work to the database.";

    let search_title = "Database Search";

    return (
        <div>
            <Nav/>
            <div className="background nav__padding" style={bg1}>
                <div className="background__filter">
                    <div className="background__full">
                        <div className="background__half background__half--content">
                            <BlackBox title={database_title} h1="true"
                                      body={section1_body1} body2={section1_body2} body3={section1_body3}/>
                            <BlackBox title={search_title} search="true"/>
                        </div>
                    </div>
                    <ScrollSection database="true" bottom="database"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Database;