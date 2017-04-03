import React from 'react'
import <%= pascalEntityName %> from '../<%= camelEntityName %>'
import {shallow} from 'enzyme'
it('should call onClick', () => {
  const onClickMock = jest.fn()
  const <%= camelEntityName %> = shallow(<<%= pascalEntityName %> onClick={onClickMock} />)
  <%= camelEntityName %>.simulate('click')
  expect(onClickMock.mock.calls.length).toBe(1)
})
