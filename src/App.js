import React from 'react';
import './App.css';
import Nav from "./components/Nav";

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {

    return (
        <div className="App">
            {/*<div className="App__fullscreen">*/}
                {/*<video loop muted autoPlay className="App__video">*/}
                {/*    <source src="https://player.vimeo.com/video/359859465" type="video/mp4"/>*/}
                {/*</video>*/}
                {/*<iframe src="https://player.vimeo.com/video/359859465"*/}
                {/*        className="App__video" frameBorder="0"*/}
                {/*        allow="autoplay; fullscreen" allowFullScreen></iframe>*/}
            {/*</div>*/}
            <Router>
                <Nav/>
                {/*<Switch>*/}
                {/*  <Route path="/about" component={About}></Route>*/}
                {/*  <Route path="/gallery" component={Gallery}></Route>*/}
                {/*  <Route path="/database" component={Database}></Route>*/}
                {/*  <Route path="/resources" component={Resources}></Route>*/}
                {/*  <Route path="/contact" component={Contact}></Route>*/}
                {/*</Switch>*/}
            </Router>
        </div>
    );
}

export default App;
