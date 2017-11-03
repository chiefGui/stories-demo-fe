import { fork, all } from 'redux-saga/effects'

import * as selfSaga from '../Self/saga'
import * as storySaga from '../Story/saga'
import * as feedSaga from '../Feed/saga'

function * rootSaga () {
  yield all([
    fork(selfSaga.watchLogin),
    fork(storySaga.watchSubmitStory),
    fork(feedSaga.watchFetchLatestStories)
  ])
}

export default rootSaga
