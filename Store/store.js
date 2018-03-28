import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './../Reducers/index';
import thunk from 'redux-thunk';

export default function configureStore() {
    const appReducer = (state, action) => {
        return rootReducer(state, action)
    }
    
    let middleware = [ thunk ]
    const enhancers = compose(
        applyMiddleware(...middleware)
    )
    let store = createStore(appReducer, enhancers);
    return store
}



