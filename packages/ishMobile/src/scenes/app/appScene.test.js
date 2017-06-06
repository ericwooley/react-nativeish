import React from 'react'
import AppScene from './appScene'
import {shallow} from 'enzyme'

it('should render', () => {
  const appScene = shallow(<AppScene />)
  expect(appScene.length).toBe(1)
})

it('should call trigger stars naviation', () => {
  const starsButtonMock = jest.fn()
  const appScene = shallow(<AppScene navigation={{navigate: starsButtonMock}} />)
  const starsButton = appScene.find('.stars-button')
  starsButton.simulate('press')
  expect(starsButtonMock.mock.calls.length).toBe(1)
})

it('should call trigger dev-panel naviation', () => {
  const starsButtonMock = jest.fn()
  const appScene = shallow(<AppScene navigation={{navigate: starsButtonMock}} />)
  const starsButton = appScene.find('.dev-panel-button')
  starsButton.simulate('press')
  expect(starsButtonMock.mock.calls.length).toBe(1)
})
