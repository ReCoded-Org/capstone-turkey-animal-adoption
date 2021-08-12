import React from "react";

const Checklist = ( {text, title, id} ) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <a href={id}><button>Read More</button></a>
        </div>
        
    )
}

export default Checklist;