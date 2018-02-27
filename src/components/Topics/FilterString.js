import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            userInput: '',
            filteredDays: []
        };
    }
    
    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filterNames(userInput) {
        var days = this.state.days;
        var filteredDays = [];
    
        for ( var i = 0; i < days.length; i++ ) {
          if ( days[i].includes(userInput) ) {
            filteredDays.push(days[i]);
          }
        }
    
        this.setState({ filteredDays: filteredDays });
      }

      render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Days: { JSON.stringify(this.state.days, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterDays(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Days: { JSON.stringify(this.state.filteredDays, null, 10) } </span>
          </div>
        )
      }
    }

export default FilterString;