import React from 'react'
import Stars from '../stars'
import {shallow} from 'enzyme'

it('should call onClick', () => {
  const onClickMock = jest.fn()
  const stars = shallow(<Stars onPress={onClickMock} starCount={-1} />)
  stars.find('Button').simulate('pressÁÁ	')
  expect(onClickMock.mock.calls.length).toBe(1)
})
