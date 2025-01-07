import React from "react";

const SecondsCounter = (props) => {
    console.log(props);
    
    return (
        <div className="cont d-flex gap-3">
            <div><i className="fa-regular fa-clock"></i></div>
            <div>{props.uno}</div>
            <div>{props.dos}</div>
            <div>{props.tres}</div>
            <div>{props.cuatro}</div>
            <div>{props.cinco}</div>
        </div>
    )
}




export default SecondsCounter