import React from 'react';
import Search from "./Search";

function Footer() {

    let year;
    if(new Date().getFullYear() !== 2019) {
        year = "- " + new Date().getFullYear();
    }

    return (
        <div className="footer">
            <div className="footer__third footer__third--left">
                <img
                    src="images/vfp-logo.png" alt=""/>
            </div>
            <div className="footer__third footer__third--mid">
                <h4>Popular Virgin Forests</h4>
                <div className="footer__forestDiv">
                    <img className="footer__forest" src="images/Forest1.jpg"
                         alt=""/>
                    <img className="footer__forest" src="images/Forest2.jpg"
                         alt=""/>
                    <img className="footer__forest" src="images/Forest3.jpg"
                         alt=""/>
                </div>
                <Search/>
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