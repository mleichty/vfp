import React from 'react';
import lunr from 'lunr';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

function Search() {
    const [input, updateInput] = React.useState("");
    const [results, updateResults] = React.useState(null);
    const forests = useSelector(state => state.forestsFire);
    const index = lunr(function() {
        this.field('name');
        this.field('description');
        this.field('fauna');
        this.field('flora');
        this.field('habitats');
        this.field('state');
        this.field('threats');
        this.ref('id');
        forests.forEach(forest => {this.add(forest)});
    });

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