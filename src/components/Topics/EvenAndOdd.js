import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChangeInput(val) {
        this.setState({
            userInput: val
        })
    }

    handleEvensAndOdds(userInput) {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10))
            }else {
                odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }

    render() {
        const { userInput } = this.state;
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input
                    onChange={e => this.handleChangeInput(e.target.value)}
                    className="inputLine" />
                <button
                    onClick={() => this.handleEvensAndOdds(
                        userInput
                    )}
                    className="confirmationButton">Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        );
    }
}

export default EvenAndOdd;