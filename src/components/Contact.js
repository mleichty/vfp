import React from 'react';
import Nav from "./Nav";
import BlackBox from "./BlackBox";
import Footer from "./Footer";

function Contact() {
    //CONTENT
    let bg1 = {
        backgroundImage: "url('images/Forest8.jpg')"
    };

    let contact_title = "Contact";
    let section1_body1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium corporis eos error fugiat ipsa maiores molestias, odio, optio, repellat sequi similique suscipit voluptas! Beatae id iure necessitatibus nesciunt nisi.";

    return (
        <div>
            <Nav/>
            <div className="background" style={bg1}>
                <div className="background__filter">
                    <div className="background__full">
                        <div className="background__half"/>
                        <div className="background__half background__half--content">
                            <BlackBox title={contact_title} h1="true"
                                      body={section1_body1} contact="true"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact;