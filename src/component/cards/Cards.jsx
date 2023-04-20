import React from "react";
import style from "../../component/cards/stylecard.css"



function Card(props) {
    return(
        <div className="card">
           <p className="title"> {props.title} </p>
           <p className="price">${props.price}</p>
           <p className="storage">{props.storage}</p>
           <p className="allowed">{props.allowed}</p>
           <p className="send">{props.send}</p>
           <button className="btn">LEARN MORE</button>
        </div>
    );
}
export default Card