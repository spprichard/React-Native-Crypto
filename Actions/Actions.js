import t from './actionTypes';

const coinAPIBaseURL = 'https://api.coinmarketcap.com';

export default fetchCoins = () => {
    return dispatch => {
        // dispatch requestCoins
        // dispatch LoadingCoins
        
        fetch(`${coinAPIBaseURL}/v1/ticker/?limit=10`)
            .then(response => response.json())
            .then(resposneJSON => {
                // dispatch(coinsLoaded())
                dispatch(updateCoins(resposneJSON))
            })
            .catch(error => {
                // dispatch coinsLoaded
                console.log(`An error occured: ${error}`)
            });
    } 
}

export function coinsLoaded() {
    return {
        type: t.COINS_LOADED,
    }
}

export function updateCoins(coins) {
    return {
        type: t.UPDATE_COINS,
        coins,
    }
}