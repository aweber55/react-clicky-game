import React, { Component } from 'react';
// import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    pickedFriend: [],
    score: 0,
    highscore: 0,
    
  };



  handleIncrement = id => {
    const newScore = this.state.picked;
    this.setState({
      score: newScore,
    });
    if (newScore >= this.state.highscore) {
      this.setState({ highscore: newScore});
    }else if (newScore === 12) {
      alert("you win");
    }
   
  };
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ score: this.state.score - 1 });
  };





  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>React Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            removeFriend={this.removeFriend}
            />
            ))}
      </Wrapper>
    );
  }
            
           






}
 


export default App;
