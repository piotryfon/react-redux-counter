const initialState = {
    result: 0
}

const reducer = (state = initialState, action) => {
        switch(action.type) {
            case 'INCREMENT':
            return  {...state, result: state.result + 1}
            case 'DECREMENT':
            return {...state, result: state.result - 1}
            default:
            console.log("Unnown action " + action.type)
            return state;
        }
}
export default reducer;