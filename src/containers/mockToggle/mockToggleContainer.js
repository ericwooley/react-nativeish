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
    console.log({enabled})
    return actionCreators.enableMocks(enabled)
  }
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onPress: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default connect(mapStateToProps, propsMapping)(MockToggle)
