import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(props){
        super(props);

        this.state = {
            population:[
                {
                    city: 'Houston',
                    state: 'Texas',
                    population: 2300000
                }, 
                {
                    city: 'Los Angeles',
                    state: 'California',
                    population: 4000000
                }, 
                {
                    city: 'New York',
                    state: 'New York',
                    population: 8500000
                }
            ],

            userInput: '',
            filteredPopulation: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filterPopulation(prop) {
        var population = this.state.population;
        var filteredPopulation = [];
        
        for ( var i = 0; i < population.length; i++ ) {
          if ( population[i].hasOwnProperty(prop) ) {
            filteredPopulation.push(population[i]);
          }
        }
    
        this.setState({ filteredPopulation: filteredPopulation });
      }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
               <h4>Filter Object</h4>
               <span className="puzzleText"></span>
               <input 
                className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
               <button className="confirmationButton" onClick={ () => this.filterPopulation(this.state.userInput) }>Filter</button>
               <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredPopulation, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObject;