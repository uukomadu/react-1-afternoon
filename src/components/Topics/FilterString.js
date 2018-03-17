import React, { Component } from 'react';

class FilterString extends Component {
  constructor(props) {
    super(props);

    this.state = {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                  'October', 'November', 'December'],
      userInput:'',
      filteredMonths: []
    }
  }

  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  handleFilter(userInput) {
    let months = this.state.months;
    let filteredMonths = [];

    for(let i = 0; i < months.length; i++) {
      if(months[i].includes(userInput)) {
        filteredMonths.push(months[i]);
      }
    }
    this.setState({filteredMonths: filteredMonths})
  }

  render() {
    const {userInput} = this.state;
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.months, null, 10) } </span>
        <input 
          onChange={e => this.handleChange(e.target.value)}
          className="inputLine" />
        <button 
          onClick={() => this.handleFilter(
            userInput
          )}
          className="confirmationButton">Filter</button>
        <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredMonths, null, 10) } </span>
      </div>
    );
  }
}

export default FilterString;