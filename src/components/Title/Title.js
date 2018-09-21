import React from "react";
import "./Title.css";

const Title = props => (
    

<h1 className="header">{props.children}
<div className="scores">
Score: {props.score} HighScore: {props.highscore} 
</div>
</h1>

)

export default Title;
