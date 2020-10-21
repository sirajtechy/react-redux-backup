import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, withRouter, Router } from 'react-router-dom'
import { List, Map } from 'immutable'
import PropTypes from 'prop-types'
// import Dashboard from './components/Dashboard'
// import LandingPage from './components/LandingPage'
import HomePage from '../src/pages/homepage/components/HomePage'
import './style.css'
const App = () => {
    return (
        <React.Fragment>
          <HomePage></HomePage>
        </React.Fragment>
    )
}
export default App 