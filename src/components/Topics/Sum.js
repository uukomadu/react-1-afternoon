import React, { Component } from 'react';

class Sum extends Component {
  constructor(props) {
    super(props);

    this.state ={
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  handleChangeNum1(val) {
    this.setState({
      number1: parseInt(val, 10) 
    })
  }

  handleChangeNum2(val) {
    this.setState({
      number2: parseInt(val, 10) 
    })
  }

  handleSum(num1, num2) {
    this.setState({sum: num1 + num2})
  }

  render() {
    const {number1, number2} = this.state;
    return (
      <div className="puzzleBox sumPB">
        <h4></h4>
        <input 
          onChange={e => this.handleChangeNum1(e.target.value)}
          className="inputLine" />
        <input 
          onChange={e => this.handleChangeNum2(e.target.value)}
          className="inputLine" />
        <button 
          onClick={() => this.handleSum(number1, number2)}
          className="confirmationButton">Add</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;