import React from 'react';
import Nav from "./Nav";

function Home() {

    // let bg = {
    //     //make sure images are in public folder to access!
    //     backgroundImage: "url('images/Forest6.jpg')"
    // };

    return(
        <div>
            <Nav home="homePage"/>
            <div className="home nav__padding">
                <iframe src="WebsiteMain.mp4"
                        className="home__video" frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen/>
            </div>
        </div>
    )
}

export default Home;