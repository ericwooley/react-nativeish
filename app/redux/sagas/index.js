import watchStars from './stars/stars'
export default function * rootSaga () {
  yield [
    watchStars()
  ]
}
