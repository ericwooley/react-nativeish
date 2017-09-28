import React from 'react'
import App from './App'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
it('renders without crashing', () => {
  const app = shallow(<App />)
  expect(app.length).toEqual(1)
})
