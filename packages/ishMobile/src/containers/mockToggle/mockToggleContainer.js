import {connect} from 'react-redux'
import {MockToggle} from '../../components'
import {actionCreators} from '../../redux/reducers/devpanel/devpanelReducer'
import {toggleMocks} from '../../services/network/networkService'
// Global State
export function mapStateToProps (state, props) {
  return {
    mocksEnabled: state.devpanel.mocksEnabled
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping = {
  onPress: () => {
    const enabled = toggleMocks()
    return actionCreators.enableMocks(enabled)
  }
}

export default connect(mapStateToProps, propsMapping)(MockToggle)
