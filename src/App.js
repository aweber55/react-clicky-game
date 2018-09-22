import React, { Component } from 'react';
// import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

//thanks to stack overflow to help with the shuffle function
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    pickedFriend: [],
    score: 0,
    highScore: 0,
    answer: ""
    
  };



  handleClick = id => {
    var pickedFriend = this.state.pickedFriend;
    // check to see if it's first time or not
    if (!pickedFriend.includes(id)) {
      pickedFriend.push(id)
      this.handleIncrement();
    }else{
      this.handleReset();
    }};
  

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      answer: "you bet correctly"
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "Winner Winner, Chicken Dinner!" });
    }
    this.handleShuffle();
  };

handleReset = () => {
  this.setState({
    score: 0,
    highScore: this.state.highScore,
    answer: "You got delt a bad hand!",
    pickedFriend: []
  });
  this.handleShuffle();
};

handleShuffle = () => {
  let shuffledFriends = shuffleArray(friends);
  this.setState({ friends: shuffledFriends });
  };


  
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };





  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highScore} answer={this.state.answer}>React Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
          
            id={friend.id}
            key={friend.id}
            image={friend.image}
            removeFriend={this.removeFriend}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            />
            ))}
      </Wrapper>
    );
  }
            
           






}
 


export default App;
