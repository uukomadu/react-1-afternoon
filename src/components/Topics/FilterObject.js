import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: [
                {
                    city: 'Houston',
                    state: 'Texas',
                    population: 2000000
                },
                {
                    city: 'Dallas',
                    population: 1000000,
                    team: 'Mavericks'
                },
                {
                    city: 'Los Angeles',
                    population: 4000000
                }
            ],
            userInput: '',
            filteredCities: []
        }
    }

    handleChangeInput(val) {
        this.setState({
            userInput: val
        })
    }

    handleFilteredArray(prop) {
        let cities = this.state.cities;
        let filteredCities = [];

        for(let i = 0; i < cities.length; i++) {
            if(cities[i].hasOwnProperty(prop)) {
                filteredCities.push(cities[i]);
            }
        }
        this.setState({
            filteredCities: filteredCities
        })
    }

    render() {
        const { userInput } = this.state;
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.cities, null, 10) } </span>
                <input
                    onChange={e => this.handleChangeInput(e.target.value)}
                    className="inputLine"></input>
                <button 
                    onClick={() => this.handleFilteredArray(
                        userInput
                    )}
                    className="confirmationButton">Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredCities, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;