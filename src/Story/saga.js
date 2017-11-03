import { take, put, call } from 'redux-saga/effects'

import * as actionTypes from './actionTypes'
import * as actions from './actions'
import * as services from './services'

export function * watchSubmitStory () {
  while (true) {
    try {
      const { story, userID } = yield take(actionTypes.SUBMIT_STORY)
      const { data: responseStory } = yield call(services.submitStory, story, userID)

      yield put(actions.submitStorySuccess(responseStory))
    } catch (error) {
      console.error(error)
    }
  }
}
