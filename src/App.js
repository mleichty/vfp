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
import fire from './components/Fire';
import {useSelector, useDispatch} from "react-redux";
import {initForests, initHistory, initMedia, initResources} from "./redux/actions/setActions";
import $ from "jquery";

function App() {

    //as soon as app starts, connects to db
    const change = useSelector(state => state.change);
    const dispatch = useDispatch();
    const db = fire.firestore();
    // const [submitted, changeSubmitted] = React.useState("");

    React.useEffect(() => {
        let newItems = [];

        function handleStatusChange(status) {
            dispatch(initForests(status));
        }

        const unsubscribe = db.collection("forests").orderBy('name').get().then(function (snapshot) {
            snapshot.forEach(function (doc) {
                let item = {
                    name: doc.data().name,
                    mainPic: doc.data().mainPic,
                    id: doc.id,
                    state: doc.data().state,
                    description: doc.data().description,
                    location: doc.data().location,
                    size: doc.data().size,
                    flora: doc.data().flora,
                    fauna: doc.data().fauna,
                    threats: doc.data().threats,
                    habitats: doc.data().habitats,
                    source: doc.data().source,
                    videoUrl: doc.data().videoUrl
                };
                newItems.push(item);
            });
            handleStatusChange(newItems);
        });

        return () => unsubscribe;
    }, [db, dispatch, change]);

    React.useEffect(() => {
        let newItems = [];

        function handleStatusChange(status) {
            dispatch(initHistory(status));
        }

        const unsubscribe2 = db.collection("history").get().then(function (snapshot) {
            snapshot.forEach(function (doc) {
                let item = {
                    year: doc.data().factYear,
                    fact: doc.data().fact,
                    forestId: doc.data().id,
                    id: doc.id
                };
                newItems.push(item);
            });
            handleStatusChange(newItems);
        });

        return () => unsubscribe2;
    }, [db, dispatch, change]);

    React.useEffect(() => {
        let newItems = [];

        function handleStatusChange(status) {
            dispatch(initMedia(status));
        }

        const unsubscribe3 = db.collection("media").get().then(function (snapshot) {
            snapshot.forEach(function (doc) {
                let item = {
                    title: doc.data().image[0],
                    media: doc.data().image[1],
                    forestId: doc.data().id,
                    id: doc.id
                };
                newItems.push(item);
            });
            handleStatusChange(newItems);
        });

        return () => unsubscribe3;
    }, [db, dispatch, change]);

    React.useEffect(() => {
        let newItems = [];

        function handleStatusChange(status) {
            dispatch(initResources(status));
        }

        const unsubscribe4 = db.collection("resources").orderBy('name').get().then(
            function (snapshot) {
                snapshot.forEach(
                    function (doc) {
                        let item = {
                            name: doc.data().name,
                            link: doc.data().link,
                            id: doc.id
                        };
                        newItems.push(item);
                    });

                handleStatusChange(newItems);
            });
        return () => unsubscribe4;
    }, [db, dispatch, change]);

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
