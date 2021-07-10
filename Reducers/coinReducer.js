import t from './../Actions/actionTypes';

const defaultState = {
    loading: true, 
    coins: [],
}

export default coinStore = (state = defaultState, action) => {
    switch (action.type) {
        case t.UPDATE_COINS:
            return {
                ...defaultState,
                loading: false,
                coins: action.coins,
            }
        default:
            return defaultState
    }
}