import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            result: 0
        }
    }
    addition = () => {
        this.setState({result: this.state.result + 1})
    }
    subtraction = () => {
        this.setState({result: this.state.result - 1})
    }
    render() {
        return (
            <div>
                <button class="btn btn-danger" onClick={this.addition}> + </button>
                <h2>{this.state.result}</h2>
                <button class="btn btn-primary" onClick={this.subtraction}> - </button>
            </div>
        )
    }
}
export default Counter;

