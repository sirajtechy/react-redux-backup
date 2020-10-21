import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, withRouter, Route,BrowserRouter} from 'react-router-dom'
import { List, Map } from 'immutable'
import PropTypes from 'prop-types'
// import Dashboard from './components/Dashboard'
// import LandingPage from './components/LandingPage'
import HomePage from '../src/pages/homepage/components/HomePage'
import './style.css'

function App () {
  return (
    <div>
    <HomePage>
    </HomePage>
      </div> 
  )
}
export default (App)