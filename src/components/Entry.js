import React from "react"



function Entry(props) {
    return (
        <div className="book">
            <img src={props.image} alt=""/>
            <h3 className="title">{props.title}</h3>
            <p>{props.author}</p>
            <p>{props.rating}</p>
            <p>{props.price}</p>
            <p>{props.type}</p>
        </div>
    )
}

export default Entry