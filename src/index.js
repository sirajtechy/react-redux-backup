import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from '../src/redux/store'



const render = (props = {}) => {
    ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
        document.getElementById('app')
    )
}
render()
if (module.hot) {
    module.hot.accept('./App', () => render())
}