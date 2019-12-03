import React from 'react';
import Header from "./Header";
import Search from "./Search";

function BlackBox(props) {

    let header;
    if(props.title && props.h1) {
        header = <Header title={props.title} h1="true"/>;
    } else if (props.title) {
        header = <Header title={props.title}/>;
    }

    let image;
    if(props.src) {
        image = <img src={props.src} alt="" className="blackBox__img"/>
    }

    let body2;
    if(props.body2) {
        body2 = <div className="blackBox__multi">{props.body2}</div>
    }

    let body3;
    if(props.body3) {
        body3 = <div className="blackBox__multi">{props.body3}</div>
    }

    let search;
    if(props.search) {
        search = <Search/>
    }

    let resources;
    if(props.resources) {
        resources = <div className="blackBox__links">
            <ul>
                <li><a className="link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link blackBox__link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link blackBox__link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link blackBox__link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link blackBox__link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link blackBox__link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link blackBox__link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link blackBox__link" href="#" target="_blank">Test Link</a></li>
                <li><a className="link" href="#" target="_blank">Test Link</a></li>
            </ul>
        </div>
    }

    let contact;
    if(props.contact) {
        contact = <div className="form__input form__input--blackBox">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="email" placeholder="Email"/>
            <input type="phone" placeholder="Phone Number"/>
            <textarea placeholder="Your Message..."/>
        </div>
    }

    return (
        <div className="blackBox">
            {header}
            {image}
            <div className="blackBox__multi">{props.body}</div>
            {body2}
            {body3}
            {search}
            {resources}
            {contact}
        </div>
    )
}

export default BlackBox;