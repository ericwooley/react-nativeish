import React from 'react'
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native'
import CenterView from './stories/CenterView'
addDecorator(getStory =>
  <CenterView>
    {getStory()}
  </CenterView>
)
// import stories
configure(() => {
  require('../src/components/Button/index.story')
}, module)

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' })
export default StorybookUI
