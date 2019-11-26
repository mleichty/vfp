import React from 'react';
import Nav from "./Nav";

function Home() {

    let bg = {
        //make sure images are in public folder to access!
        backgroundImage: "url('images/Forest6.jpg')"
    };

    return(
        <div>
            <Nav home="homePage"/>
            <div className="background" style={bg}>
            </div>
        </div>
    )
}

export default Home;