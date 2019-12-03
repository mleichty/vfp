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
    let section1_body1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium corporis eos error fugiat ipsa maiores molestias, odio, optio, repellat sequi similique suscipit voluptas! Beatae id iure necessitatibus nesciunt nisi.";
    let section1_body2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium corporis eos error fugiat ipsa maiores molestias, odio, optio, repellat sequi similique suscipit voluptas! Beatae id iure necessitatibus nesciunt nisi." +
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium corporis eos error fugiat ipsa maiores molestias, odio, optio, repellat sequi similique suscipit voluptas! Beatae id iure necessitatibus nesciunt nisi.";

    let search_title = "Database Search";

    return (
        <div>
            <Nav/>
            <div className="background" style={bg1}>
                <div className="background__filter">
                    <div className="background__full">
                        <div className="background__half"/>
                        <div className="background__half background__half--content">
                            <BlackBox title={database_title} h1="true"
                                      body={section1_body1} body2={section1_body2}/>
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