import React from 'react';
import ScrollSection from "./ScrollSection";
import Nav from "./Nav";
import Footer from "./Footer";

function Gallery() {
    return(
        <div>
            <Nav/>
            <ScrollSection gallery="true" bottom="gallery"/>
            <Footer/>
        </div>
    )
}

export default Gallery;