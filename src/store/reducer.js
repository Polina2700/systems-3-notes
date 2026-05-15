export const initialState = {
    counterValue: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT-count":
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case "DECREMENT-count":
            return {
                ...state,
                counterValue: state.counterValue - 1
            }
        default:
            return state;    
    }    
}    