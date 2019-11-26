import React from 'react';
import Nav from "./Nav";
import BlackBox from "./BlackBox";
import Footer from "./Footer";
import $ from 'jquery';

function About() {

    let bg1 = {
        backgroundImage: "url('images/Forest1.jpg')"
    };

    let about_title = "About The Virgin Forest Project";
    let section1_body1 = "Lorem ipsum dolor sit amet, consectetur adipisicing" +
        " elit. Ad delectus doloribus error explicabo facilis impedit inventore " +
        "ipsa laboriosam laudantium molestiae nulla officia porro praesentium " +
        "quia, quo quos sequi similique soluta.";
    let section1_body2 = "Lorem ipsum dolor sit amet, consectetur adipisicing" +
        " elit. Ad delectus doloribus error explicabo facilis impedit inventore " +
        "ipsa laboriosam laudantium molestiae nulla officia porro praesentium " +
        "quia, quo quos sequi similique soluta.";

    let section2_title = "Another header would go here";
    let section2_body1 = "Lorem ipsum dolor sit amet, consectetur adipisicing" +
        " elit. Ad delectus doloribus error explicabo facilis impedit inventore " +
        "ipsa laboriosam laudantium molestiae nulla officia porro praesentium " +
        "quia, quo quos sequi similique soluta. Lorem ipsum dolor sit amet, consectetur adipisicing" +
        " elit. Ad delectus doloribus error explicabo facilis impedit inventore " +
        "ipsa laboriosam laudantium molestiae nulla officia porro praesentium " +
        "quia, quo quos sequi similique soluta.";
    let section2_img = "images/placeholder.png";

    let section3_title = "Yet another header here";
    let section3_body1 = "Lorem ipsum dolor sit amet, consectetur adipisicing" +
        " elit. Ad delectus doloribus error explicabo facilis impedit inventore " +
        "ipsa laboriosam laudantium molestiae nulla officia porro praesentium " +
        "quia, quo quos sequi similique soluta. Lorem ipsum dolor sit amet, consectetur adipisicing" +
        " elit. Ad delectus doloribus error explicabo facilis impedit inventore " +
        "ipsa laboriosam laudantium molestiae nulla officia porro praesentium " +
        "quia, quo quos sequi similique soluta.";

    let section4_title = "Last header here";
    let section4_body1 = "Lorem ipsum dolor sit amet, consectetur adipisicing" +
        " elit. Ad delectus doloribus error explicabo facilis impedit inventore " +
        "ipsa laboriosam laudantium molestiae nulla officia porro praesentium " +
        "quia, quo quos sequi similique soluta. Lorem ipsum dolor sit amet, consectetur adipisicing" +
        " elit. Ad delectus doloribus error explicabo facilis impedit inventore " +
        "ipsa laboriosam laudantium molestiae nulla officia porro praesentium " +
        "quia, quo quos sequi similique soluta.";


    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('.aboutPage__filter').css({
                backdropFilter: "blur(" + (scroll / 150) + "px)"
            })
        } else {
            $('.aboutPage__filter').css({
                backdropFilter: "none"
            })
        }
    });

    return (
        <div>
            <Nav/>
            <div className="aboutPage" style={bg1}>
                <div className="aboutPage__filter">
                    <div className="aboutPage__half"/>
                    <div className="aboutPage__half aboutPage__half--content">
                        <BlackBox title={about_title} h1="true"
                                  body={section1_body1}/>
                        <BlackBox body={section1_body2}/>
                        <BlackBox title={section2_title}
                                  src={section2_img} body={section2_body1}/>
                        <BlackBox title={section3_title}
                                  body={section3_body1}/>
                        <BlackBox title={section4_title}
                                  body={section4_body1} body2={section4_body1}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;