import React from 'react';
import Header from "./Header";

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

    return (
        <div className="blackBox">
            {header}
            {image}
            <div>{props.body}</div>
            {body2}
            {body3}
        </div>
    )
}

export default BlackBox;