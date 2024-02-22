import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { logger } from 'redux-logger'

//the logger middleware intercepts the states and actions, telling us on the console.log what is the previous state, 
//the action called and finally the next state, after the action dispatch. 

//the createStore() function crossed is not an error, but essencially a visual warning by the redux maintaners, 
//trying to tell us to use the redux toolkit instead of 'plain redux' to makes our lives easier.
//with the redux toolkit we use configureStore() instead of createStore().
const store = createStore(rootReducer, applyMiddleware(logger))

export default store

//search for redux-devtools-extension!!

