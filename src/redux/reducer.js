// import {combineReducers} from 'redux-immutable'
// import uploadReducer from '../reducers/dashboardReducer'

// const rootReducer = combineReducers ({
//     uploadReducer
// })
// export default rootReducer


import {combineReducers} from 'redux-immutable'
import {default as homePageReducer} from '../redux/homepage/reducer'


export default combineReducers ({
   homePageReducer
})

