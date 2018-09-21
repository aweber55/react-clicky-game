
import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div className="card" value= {props.id} onClick={() => props.handleIncrement(props.id)}  >
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
        <span onClick={() => props.removeFriend(props.id)} className="remove">
      x
    </span>
      </div>
      </div>
    
  );
  export default FriendCard;


//   () => props.handleClick(props.id