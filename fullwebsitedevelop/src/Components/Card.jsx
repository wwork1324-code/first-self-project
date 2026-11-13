import React from "react";
import "./Card.css";

function Card(props) {
    return (
    <div className="card">
        
      <h2>{props.pName}</h2>

      <p>{props.desc}</p>

      <h3>Price: Rs.{props.Price}</h3>

      <button className="card-btn">Buy Now</button>
    </div>
  );
}

export default Card;