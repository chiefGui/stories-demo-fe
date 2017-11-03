import { take, put, call } from 'redux-saga/effects'

import * as actionTypes from './actionTypes'
import * as services from './services'
import * as actions from './actions'

export function * watchFetchLatestStories () {
  while (true) {
    try {
      yield take(actionTypes.STORIES_LATEST_FETCH)

      const { data: stories } = yield call(services.fetchLatestStories)

      yield put(actions.storiesLatestFetchSuccess(stories))
    } catch (error) {
      console.error(error)
    }
  }
}
