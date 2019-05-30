import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
    
    addition = () => {
        this.props.onIncrement();
    }
    subtraction = () => {
        this.props.onDecrement();
    }
    render() {
        return (
            <div>
                <button class="btn btn-danger" onClick={this.addition}> + </button>
                <h2>{this.props.result}</h2>
                <button class="btn btn-primary" onClick={this.subtraction}> - </button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement : () => dispatch({type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' })
    }
}
const mapStateToProps = state => {
    return {
        result : state.result
    }
}
const CounterComponent = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default CounterComponent;

