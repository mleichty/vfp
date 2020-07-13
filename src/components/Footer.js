import React from 'react';
import {Link, Redirect} from "react-router-dom";
import $ from 'jquery';
import {useSelector} from "react-redux";
// import Search from "./Search";

function Footer() {

    const forests = useSelector(state => state.forestsFire);

    let forestList = forests.map((forest, idx) => {
        return (
            <Link to={'/' + forest.id} key={idx} className="footer__forest" onClick={() => reload()}
                  style={{backgroundImage: "url('" + forest.mainPic + "')"}}>
            </Link>
        )
    });
    if (forestList.length > 3) {forestList.length = 3}

    let year;
    if(new Date().getFullYear() !== 2019) {
        year = "- " + new Date().getFullYear();
    }

    const reload = () => {
        setTimeout(() => {window.location.reload(); $(window).scrollTop(0);}, 200);
    };

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