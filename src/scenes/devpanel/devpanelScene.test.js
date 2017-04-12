import React from 'react'
import DevpanelScene from './devpanelScene'
import {shallow} from 'enzyme'

it('should render', () => {
  const devpanelScene = shallow(<DevpanelScene />)
  expect(devpanelScene.length).toBe(1)
})

// You could use something like this to test onClick handlers
// it('should call trigger stars naviation', () => {
//   const starsButtonMock = jest.fn()
//   const appScene = shallow(<Devpanel navigation={{navigate: starsButtonMock}} />)
//   const starsButton = appScene.find('.stars-button')
//   starsButton.simulate('press')
//   expect(starsButtonMock.mock.calls.length).toBe(1)
// })

// it('should call trigger dev-panel naviation', () => {
//   const starsButtonMock = jest.fn()
//   const appScene = shallow(<Devpanel navigation={{navigate: starsButtonMock}} />)
//   const starsButton = appScene.find('.dev-panel-button')
//   starsButton.simulate('press')
//   expect(starsButtonMock.mock.calls.length).toBe(1)
// })
