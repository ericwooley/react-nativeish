import {mapStateToProps, propsMapping} from './mockToggleContainer'
describe('toggleMock container', () => {
  it('should map state to props', () => {
    const state = {devpanel: {mocksEnabled: true}}
    const mappedState = mapStateToProps(state)
    expect(mappedState).toEqual({mocksEnabled: true})
  })
  it('should have a propsMapping', () => {
    expect(typeof propsMapping.onPress).toEqual('function')
  })
})
