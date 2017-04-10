import {combineReducers} from 'redux'
import counter from './counter/counterReducer'
import devpanel from './devpanel/devpanelReducer'
export default combineReducers({counter, devpanel})
