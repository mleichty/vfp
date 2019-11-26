import React from 'react';
import Nav from "./Nav";
import BlackBox from "./BlackBox";
import Quote from "./Quote";
import Footer from "./Footer";
import $ from 'jquery';

function About() {

    let bg1 = {
        backgroundImage: "url('images/Forest1.jpg')"
    };

    let about_title = "Why We Started";
    let section1_body1 = "In 2016, I was awarded a Creative Renewal Grant from the Arts Council of Indianapolis. As a filmmaker, my application purposed filming in the three virgin forests under state control in Indiana. My project involved visiting these forests during each season of the year and each time shooting eight, 8-minute tracking shots, which would basically take a full day to complete.";
    let section1_body2 = "My proposal also included the creation of a website (this one) that would host the films and information about the forests I documented. But I also wanted the website to be a platform for other’s artistic work about virgin forests in the United States east of the Mississippi.";
    let section1_body3 = "I invite you to submit your work for consideration, whether it be photographs, paintings, films, etc. My hope is that this website can grow into a repository of artistic expression about the few remaining virgin forests.      ";

    let quote1 = "I am convinced that most Americans of the new generation have no idea what a decent forest looks like. The only way to tell them is to show them.";
    let quote1_author = "Aldo Leopold";
    let quote1_src = "The River of the Mother of God";

    let section2_title = "About Me";
    let section2_body1 = "Thomas Lewis is a senior lecturer in the School of Informatics and Computing in IUPUI (Indiana University Purdue University – Indianapolis), where he teaches video production and filmmaking. When not doing video-related work, he likes to bike, run and escape to foreign lands. He blogs at untitledevent.wordpress.com and writes about his various bike tours at grannygear.tumblr.com. He is long overdue for another tour.";
    let section2_img = "images/placeholder.png";

    let quote2 = "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another.";
    let quote2_author = "Chris Maser";
    let quote2_src = "Forest Primeval";

    let section3_title = "What is a Virgin Forest?";
    let section3_body1 = "During the project, much to my surprise I was often asked, “What is a virgin forest? I have never heard of that.” A virgin forest is a forest that has never been logged. Most of the original forests in Indiana have long since been turned to lumber. The vast majority of the forests you see today (at least in Indiana) are secondary growth, growth after having been logged.";
    let section3_body2 = "The number of remaining virgin forests in the United States are pretty limited. While Indiana has a dozen old-growth forests, only four of them are considered virgin. The fourth virgin forest, the one I did not film in, is under federal control in the Hoosier National Forest and permission from the national forest was not forthcoming with substantial payment.";

    let section4_title = "Last header here";
    let section4_body1 = "My films were shot in high resolution 4K. Each shot was 8-minutes in duration, but has been sped up 800% into timelapse to last 1 minute. Each film contains shots from each season of the year so you can witness a complete seasonal cycle in the life of a virgin forest.";


    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        // if (scroll > 100) {
        $('.aboutPage__filter').css({
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
            <Nav/>
            <div className="aboutPage" style={bg1}>
                <div className="aboutPage__filter">
                    <div className="aboutPage__half"/>
                    <div className="aboutPage__half aboutPage__half--content">
                        <BlackBox title={about_title} h1="true"
                                  body={section1_body1} body2={section1_body2}
                                  body3={section1_body3}/>
                        <Quote quote={quote1} author={quote1_author}
                               src={quote1_src}/>
                        <BlackBox title={section2_title}
                                  src={section2_img} body={section2_body1}/>
                        <Quote quote={quote2} author={quote2_author}
                               src={quote2_src}/>
                        <BlackBox title={section3_title}
                                  body={section3_body1} body2={section3_body2}/>
                        <Quote quote={quote2} author={quote2_author}
                               src={quote2_src}/>
                        <BlackBox title={section4_title}
                                  body={section4_body1}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;