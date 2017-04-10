import React from 'react'
import MockToggle from './mockToggleComponent'
import {shallow} from 'enzyme'
it('should call onClick', () => {
  const onPressMock = jest.fn()
  const mockToggle = shallow(<MockToggle onPress={onPressMock} />)
  mockToggle.find('Button').simulate('press')
  expect(onPressMock.mock.calls.length).toBe(1)
})
