import { fork, all } from 'redux-saga/effects'

import * as homeSaga from '../Home/saga'
import * as storySaga from '../Story/saga'
import * as profileSaga from '../Profile/saga'

function * rootSaga () {
  yield all([
    fork(homeSaga.watchLogin),
    fork(storySaga.watchSubmitStory),
    fork(profileSaga.watchFetchUser)
  ])
}

export default rootSaga
