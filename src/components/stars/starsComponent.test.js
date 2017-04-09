import React from 'react'
import Stars from './starsComponent'
import {shallow} from 'enzyme'
it('should call onClick', () => {
  const onPressMock = jest.fn()
  const stars = shallow(<Stars onPress={onPressMock} />)
  stars.find('Button').simulate('press')
  expect(onPressMock.mock.calls.length).toBe(1)
})
