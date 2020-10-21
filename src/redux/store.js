import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import {Map} from 'immutable'

const middlewares = [thunk]

const store = createStore(reducer,Map(),compose(applyMiddleware(...middlewares),
window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

export default store

