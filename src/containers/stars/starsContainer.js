import {connect} from 'react-redux'
import {Stars} from '../../components'
import {actions} from '../../redux/sagas/'
export default connect(
  (state) => ({
    starCount: state.counter.count
  }),
  {
    onPress: actions.starsActions.FETCH_STARS
  }
)(Stars)
