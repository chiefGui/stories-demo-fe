import { take, put, call } from 'redux-saga/effects'

import generateRandomSelf from './utils/generateRandom'
import * as actionTypes from './actionTypes'
import * as services from './services'
import * as actions from './actions'

export function * watchLogin () {
  while (true) {
    try {
      yield take(actionTypes.SELF_LOGIN)

      const randomSelf = generateRandomSelf()
      const { data: self } = yield call(services.registerUser, randomSelf)

      yield put(actions.loginSuccess(self))

      yield call(fetchLatestStories)
    } catch (error) {
      console.error(error)
    }
  }
}

function * fetchLatestStories () {
  try {
    yield put(actions.storiesLatestFetch())

    const { data: stories } = yield call(services.fetchLatestStories)

    yield put(actions.storiesLatestFetchSuccess(stories))
  } catch (error) {
    console.error(error)
  }
}
