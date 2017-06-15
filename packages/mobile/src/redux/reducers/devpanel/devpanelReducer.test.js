import devpanelReducer, {actions, actionCreators} from './devpanelReducer'

it('should create increment actions', () => {
  expect(actionCreators.enableMocks(true)).toEqual({type: actions.SET_MOCKS_ENABLED, payload: true})
})

it('should switch to true', () => {
  expect(devpanelReducer({mocksEnabled: false}, actionCreators.enableMocks(true))).toEqual({mocksEnabled: true})
})
it('should switch to false', () => {
  expect(devpanelReducer({mocksEnabled: true}, actionCreators.enableMocks(false))).toEqual({mocksEnabled: false})
})
