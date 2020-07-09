import React from 'react';
import fire from "./Fire";
import lunr from 'lunr';
import {Link} from 'react-router-dom';

function Search() {
    const [forests, updateForests] = React.useState([]);
    const [submitted, changeSubmitted] = React.useState("");
    const [index, updateIndex] = React.useState([]);
    const [input, updateInput] = React.useState("");
    const [results, updateResults] = React.useState(null);

    let db = fire.firestore();

    React.useEffect(() => {
        let newForests = [];

        function handleStatusChange(status) {
            const newIndex = lunr(function() {
                this.field('name');
                this.field('description');
                this.field('fauna');
                this.field('flora');
                this.field('habitats');
                this.field('state');
                this.field('threats');
                this.ref('id');
                status.forEach(forest => {this.add(forest)}, this);
            });
            updateIndex(newIndex);
            updateForests(status);
        }

        const unsubscribe = db.collection("forests").orderBy('name').get().then(
            function (snapshot) {
                snapshot.forEach(
                    function (doc) {
                        let item = {
                            name: doc.data().name,
                            description: doc.data().description,
                            fauna: doc.data().fauna,
                            flora: doc.data().flora,
                            habitats: doc.data().habitats,
                            state: doc.data().state,
                            threats: doc.data().threats,
                            id: doc.id
                        };
                        newForests.push(item);
                    });

                handleStatusChange(newForests);
            });
        return () => unsubscribe;
    }, [submitted]);

    const handleChange = () => event => {
        updateInput(event.target.value);
        updateResults(null);
    };
    const handleSubmit = () => {
        updateResults(index.search(input).map(({ ref, ...rest }) => ({
            ref,
            item: forests.find(m => m.id === ref),
            ...rest
        })));
    };

    return (
        <div className="form__input">
            <input type="text" placeholder="Search the Database..." value={input} onChange={handleChange()}/>
            <button onClick={handleSubmit}>Submit</button>
            {results ? <div className='blackBox__links'>
                <p>{results.length} forest(s) found containing "{input}"</p>
                <ul>{results.map(result =>
                    (<li><Link className="link" to={"/" + result.item.id}
                               key={result.item.id}>{result.item.name}</Link></li>)
                )}</ul></div> : ""}
        </div>
    )
}

export default Search;