import {connect} from 'react-redux'
import {<%= pascalEntityName %>} from '../../components'
import {actionCreators} from '../../redux/sagas/'

// Global State
export function mapStateToProps (state, props) {
  return {
    starCount: state.counter.count
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping = {
  onPress: actions.starsActions.FETCH_STARS
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onPress: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default connect(mapStateToProps, propsMapping)(<%= pascalEntityName %>)
