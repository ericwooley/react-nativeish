import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import gitHubMocks from './mocks/github'

/**
 * There is no unit tests for this functionality because things seem to break upon being pulled into jest.
 * Hopefully I can figure that out at some point.
 */
let mocksInitiated = false
let mock = null
let mocksEnabled = false
export default axios
export function mockRequests () {
  if (!mocksInitiated) {
    mock = new MockAdapter(axios)
    // Mocks should be added here
    gitHubMocks(mock)
  } else {
    axios.defaults.adapter = mock
  }
  mocksInitiated = true
}

export function toggleMocks () {
  if (mocksEnabled) {
    restoreRequests()
    mocksEnabled = false
  } else {
    mockRequests()
    mocksEnabled = true
  }
  return mocksEnabled
}

export function restoreRequests () {
  mock.restore()
}
