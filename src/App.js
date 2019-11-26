import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {

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
                    {/*<Route path="/gallery" component={Gallery}/>*/}
                    {/*<Route path="/database" component={Database}/>*/}
                    {/*<Route path="/resources" component={Resources}/>*/}
                    {/*<Route path="/contact" component={Contact}/>*/}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
