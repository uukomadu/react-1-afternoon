import React, { Component } from 'react';

class Palindrome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  handleReverse(userInput) {
    let word = userInput;
    let backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if(word === backwards) {
      this.setState({palindrome: 'true'});
    } else {
      this.setState({palindrome: 'false'});
    }
  }

  render() {
    const { userInput } = this.state;
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input 
          onChange={e => this.handleChange(e.target.value)}
          className="inputLine" />
        <button 
          onClick={() => this.handleReverse(
            userInput
          )}
          className="confirmationButton"></button>
        <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
      </div>
    );
  }
}

export default Palindrome;