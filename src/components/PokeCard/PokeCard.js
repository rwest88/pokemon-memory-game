import React from "react";
import "./PokeCard.css";

const PokeCard = props => (
  <div className={props.currentScore === 0 ? "card card-shake" : "card"}
       onClick={() => props.selectPoke(props.name)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">{props.name}</div>
  </div>
);

export default PokeCard;
