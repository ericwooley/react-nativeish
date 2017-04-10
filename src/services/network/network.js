import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import gitHubMocks from './mocks/github'

/**
 * There is no unit tests for this functionality because things seem to break upon being pulled into jest.
 * Hopefully I can figure that out at some point.
 */
let mocksInitiated = false
let mock = null
export default axios
export function mockRequests () {
  if (!mocksInitiated) {
    mock = new MockAdapter(axios)
    gitHubMocks(mock)
  } else {
    axios.defaults.adapter = mock
  }
  mocksInitiated = true
}
mockRequests()
export function restoreRequests () {
  mock.restore()
}
