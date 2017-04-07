import watchStars, {actions as starsActions} from './stars/stars'

export const actions = {
  starsActions
}
export default function * rootSaga () {
  yield [
    watchStars()
  ]
}
