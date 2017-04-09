import watchStars, {actions as starsActions} from './stars/starsSaga'

export const actions = {
  starsActions
}
export default function * rootSaga () {
  yield [
    watchStars()
  ]
}
