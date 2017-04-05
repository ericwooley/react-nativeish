import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import <%= pascalEntityName %> from './<%= camelEntityName %>'

const load = () => render((
  <AppContainer>
    <<%= pascalEntityName %> />
  </AppContainer>
  ), document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./<%= camelEntityName %>', load)
}

load()
