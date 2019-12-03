import React from 'react';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Database from "./components/Database";
import Gallery from "./components/Gallery";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import $ from "jquery";

function App() {

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        // if (scroll > 100) {
        $('.background__filter').css({
            backdropFilter: "blur(" + (scroll / 30) + "px)"
        })
        // } else {
        //     $('.aboutPage__filter').css({
        //         backdropFilter: "none"
        //     })
        // }
    });

    return (
        <div>
            {/*<div className="App__fullscreen">*/}
                {/*<video loop muted autoPlay className="App__video">*/}
                {/*    <source src="https://player.vimeo.com/video/359859465" type="video/mp4"/>*/}
                {/*</video>*/}
                {/*<iframe src="https://player.vimeo.com/video/359859465"*/}
                {/*        className="App__video" frameBorder="0"*/}
                {/*        allow="autoplay; fullscreen" allowFullScreen></iframe>*/}
            {/*</div>*/}
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/database" component={Database}/>
                    <Route path="/resources" component={Resources}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
