import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

function Load() {
    return (
        <div className="pageLoad"><FontAwesomeIcon icon={faSpinner} size="4x" spin/></div>
    )
}

export default Load;