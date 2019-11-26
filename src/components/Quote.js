import React from 'react';

function Quote(props) {
    let author;
    if(props.author) {
        author = <h4 className="quote__body quote__body--auth">props.author</h4>;
    }

    if(props.src) {
        author = <h4 className="quote__body quote__body--auth"><span className="quote__body--src">{props.src}</span></h4>;
    }

    if(props.author && props.src) {
        author = <h4 className="quote__body quote__body--auth">{props.author}, <span className="quote__body--src">{props.src}</span></h4>;
    }


    return(
        <div className="quote">
            <h2 className="quote__body quote__body--quote">"{props.quote}"</h2>
            {author}
        </div>
    )
}

export default Quote;