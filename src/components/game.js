import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {

  }

  render() {
    const { feedback, guesses } = this.state;
    const guessCount = guesses.length;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}