import React from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <button class="btn btn-danger">+</button>
                <h2>0</h2>
                <button class="btn btn-primary">-</button>
            </div>
        )
    }
}
export default Counter;

