import React from 'react';
import Header from "./Header";
import Search from "./Search";
import fire from "./Fire";

function BlackBox(props) {

    const [resources, updateResources] = React.useState([]);
    const [submitted, changeSubmitted] = React.useState("");

    let db = fire.firestore();

    React.useEffect(() => {
        let newResources = [];

        function handleStatusChange(status) {
            updateResources(status);
        }

        const unsubscribe = db.collection("resources").orderBy('name').get().then(
            function (snapshot) {
                snapshot.forEach(
                    function (doc) {
                        let item = {
                            name: doc.data().name,
                            link: doc.data().link,
                            id: doc.id
                        };
                        newResources.push(item);
                    });

                handleStatusChange(newResources);
            });
        return () => unsubscribe;
    }, [submitted]);

    let resourceList = resources.map((resource, idx) => {
        return (
            <li><a className="link" href={resource.link} target="_blank">{resource.name}</a></li>
        )
    });

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
        body2 = <p className="blackBox__multi">{props.body2}</p>
    }

    let body3;
    if(props.body3) {
        body3 = <p className="blackBox__multi">{props.body3}</p>
    }

    let search;
    if(props.search) {
        search = <Search/>
    }

    let links;
    if(props.resources) {
        links = <div className="blackBox__links">
            <ul>
                {resourceList}
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

    let forest;
    if(props.forest) {
        //tried to map / foreach through props.forest since it's an object
        //but said props.forest.map was not a function
        let state;
        let location;
        let size;
        let flora;
        let fauna;
        let habitats;
        let threats;
        let source;
        if(props.forest.state !== "") {
            state = <p className="blackBox__forestFact"><span className="blackBox__link">State: </span>{props.forest.state}</p>
        }
        if(props.forest.location !== "") {
            location = <p className="blackBox__forestFact"><span className="blackBox__link">Location: </span>{props.forest.location}</p>
        }
        if(props.forest.size !== "") {
            size = <p className="blackBox__forestFact"><span className="blackBox__link">Size: </span>{props.forest.size}</p>
        }
        if(props.forest.flora !== "") {
            flora = <p className="blackBox__forestFact"><span className="blackBox__link">Flora: </span>{props.forest.flora}</p>
        }
        if(props.forest.fauna !== "") {
            fauna = <p className="blackBox__forestFact"><span className="blackBox__link">Fauna: </span>{props.forest.fauna}</p>
        }
        if(props.forest.habitats !== "") {
            habitats = <p className="blackBox__forestFact"><span className="blackBox__link">Habitats: </span>{props.forest.habitats}</p>
        }
        if(props.forest.threats !== "") {
            threats = <p className="blackBox__forestFact"><span className="blackBox__link">Threats: </span>{props.forest.threats}</p>
        }
        if(props.forest.source !== "") {
            source = <p className="blackBox__forestFact"><span className="blackBox__link">Source: </span>{props.forest.source}</p>
        }
        forest = <div>
            {state}
            {location}
            {size}
            {flora}
            {fauna}
            {habitats}
            {threats}
            {source}
        </div>
    }

    return (
        <div className="blackBox">
            {header}
            {image}
            <p className="blackBox__multi">{props.body}</p>
            {body2}
            {body3}
            {search}
            {links}
            {contact}
            {forest}
        </div>
    )
}

export default BlackBox;