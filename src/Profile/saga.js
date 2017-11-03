import { take, put, call } from 'redux-saga/effects'

import * as actionTypes from './actionTypes'
import * as actions from './actions'
import * as services from './services'

export function * watchFetchUser () {
  while (true) {
    try {
      const { slug } = yield take(actionTypes.FETCH_USER)
      const { data: user } = yield call(services.fetchUserBySlug, slug)

      yield put(actions.fetchUserSuccess(user))
    } catch (error) {
      console.error(error)
    }
  }
}
