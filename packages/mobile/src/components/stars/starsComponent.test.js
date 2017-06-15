import React from 'react'
import Stars from './starsComponent'
import {shallow} from 'enzyme'
it('should call onPress with a positive number', () => {
  const onPressMock = jest.fn()
  const stars = shallow(<Stars starCount={1} onPress={onPressMock} />)
  stars.find('Button').simulate('press')
  expect(onPressMock.mock.calls.length).toBe(1)
})

it('should call onPress with a negative number', () => {
  const onPressMock = jest.fn()
  const stars = shallow(<Stars starCount={-1} onPress={onPressMock} />)
  stars.find('Button').simulate('press')
  expect(onPressMock.mock.calls.length).toBe(1)
})
