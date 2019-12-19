import React from 'react';
import {Link, Redirect} from "react-router-dom";
import fire from "./Fire";
import $ from 'jquery';

function Footer() {

    const [forests, updateForests] = React.useState([]);
    const [submitted, changeSubmitted] = React.useState("");

    let year;
    if(new Date().getFullYear() !== 2019) {
        year = "- " + new Date().getFullYear();
    }

    const reload = () => {
        setTimeout(() => {window.location.reload(); $(window).scrollTop(0);}, 200);
    };

    let db = fire.firestore();

    React.useEffect(() => {
        let newForests = [];

        function handleStatusChange(status) {
            updateForests(status);
        }

        const unsubscribe = db.collection("forests").limit(3).get().then(
            function (snapshot) {
                snapshot.forEach(
                    function (doc) {
                        let item = {
                            mainPic: doc.data().mainPic,
                            id: doc.id
                        };
                        newForests.push(item);
                    });
                handleStatusChange(newForests);
            });
        return () => unsubscribe;
    }, [submitted]);

    let forestList = forests.map((forest, idx) => {
        return (
            <Link to={'/' + forest.id} key={idx} className="footer__forest" onClick={() => reload()}
                  style={{backgroundImage: "url('" + forest.mainPic + "')"}}>
            </Link>
        )
    });

    return (
        <div className="footer">
            <Link to={'/'} className="footer__third footer__third--left">
                <img className="footer__logo"
                    src="images/vfp-logo.png" alt=""/>
            </Link>
            <div className="footer__third footer__third--mid">
                <h4>Popular Virgin Forests</h4>
                <div className="footer__forestDiv">
                    {forestList}
                </div>
                {/*<Search/>*/}
            </div>
            <div className="footer__third footer__third--right">
                <h4>Interested in adding to the database?</h4>
                <a className="button" href="mailto:lewisct@iupui.edu">Email Now</a>
                <p>&copy; 2019 {year} The Virgin Forest Project</p>
                <p>Designed by <a className="link"
                                  href="https://mleichty.github.io/leichty_portfolio/"
                                  target="_blank">Maria Leichty</a></p>
            </div>
        </div>
    )
}

export default Footer;