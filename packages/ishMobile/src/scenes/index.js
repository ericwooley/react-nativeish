import React from 'react'
import PropTypes from 'prop-types'
import Devpanel from './devpanel/devpanelScene'
import App from './app/appScene'
import Stars from './stars/starsScene'
import { createReduxStore } from '../redux/store'
import { Provider } from 'react-redux'
export const reduxStore = createReduxStore('Starter Kit')

export const Scenes = {
  Home: 'Home',
  Stars: 'Stars',
  DevPanel: 'DevPanel'
}
export default {
  [Scenes.Home]: { screen: App },
  [Scenes.Stars]: { screen: Stars },
  [Scenes.DevPanel]: { screen: Devpanel }
}

export function SceneWrapper (props) {
  return (
    <Provider store={reduxStore}>{props.children}</Provider>
  )
}

SceneWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
}
