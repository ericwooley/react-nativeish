import React from 'react'
import <%= pascalEntityName %> from './<%= camelEntityName %>Component'
import {shallow} from 'enzyme'
it('should call onClick', () => {
  const onPressMock = jest.fn()
  const <%= camelEntityName %> = shallow(<<%= pascalEntityName %> />)
  <%= camelEntityName %>.simulate('press')
  expect(onPressMock.mock.calls.length).toBe(1)
})
