import { take, put, call } from 'redux-saga/effects'

import generateRandomSelf from '../Self/utils/generateRandom'
import * as actionTypes from './actionTypes'
import * as actions from './actions'
import * as services from './services'

export function * watchLogin () {
  while (true) {
    try {
      yield take(actionTypes.SELF_LOGIN)

      const randomSelf = generateRandomSelf()
      const { data: self } = yield call(services.registerUser, randomSelf)

      yield put(actions.loginSuccess(self))
    } catch (error) {
      console.error(error)
    }
  }
}
