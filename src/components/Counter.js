import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            result: 0
        }
    }
    render() {
        return (
            <div>
                <button class="btn btn-danger">+</button>
                <h2>{this.state.result}</h2>
                <button class="btn btn-primary">-</button>
            </div>
        )
    }
}
export default Counter;

