import React from 'react'
import Link from './linkComponent'
import {shallow} from 'enzyme'
import {LinkService} from '../../services/linkService/linkService'
it('should call onClick', () => {
  const linkOpenMock = jest.fn()
  const link = shallow(<Link url='http://www.google.com' linkService={new LinkService({openLinkBehavior: linkOpenMock})} />)
  link.simulate('press')
  expect(linkOpenMock.mock.calls.length).toBe(1)
  expect(linkOpenMock.mock.calls[0][0]).toBe('http://www.google.com')
})
