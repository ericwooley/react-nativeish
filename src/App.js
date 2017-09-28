import React, { Component } from 'react'
import './App.css'
import RootRoute from './navigation/'
export default class App extends Component {
  render () {
    return <RootRoute {...this.props} />
  }
}
