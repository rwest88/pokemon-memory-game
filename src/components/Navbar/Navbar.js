import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div>
    <ul className="nav my-nav nav-justified">
      <li><a href="/"><img src="../../images/pokelogo.svg" alt="logo"/> Memory Game</a></li>
      <li
        className={props.message.indexOf('incorrectly') !== -1 ? 
          "desc-incorrect" : 
          props.message.indexOf('correctly') !== -1 ?
            "desc-correct" :
            "desc-normal"}
      >
        {props.message}
      </li>
      <li>Score: <span className="score">{Math.floor(props.currentScore)}</span> | Top Score: {props.topScore}</li>
    </ul>
  </div>
);

export default Navbar;

