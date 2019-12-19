import React from 'react';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Database from "./components/Database";
import Gallery from "./components/Gallery";
import Resources from "./components/Resources";
import Forest from "./components/Forest";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import $ from "jquery";

function App() {

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        // if (scroll > 100) {
        $('.background__filter').css({
            WebkitBackdropFilter: "blur(" + (scroll / 30) + "px)",
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
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/database" component={Database}/>
                    <Route path="/resources" component={Resources}/>
                    <Route path="/:id" component={Forest}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
