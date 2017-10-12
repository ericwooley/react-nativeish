import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
it('renders without crashing', () => {
  const rendered = shallow(<App />)
  expect(rendered.length).toBe(1)
})
