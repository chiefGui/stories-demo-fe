import reswitch from 'reswitch'

import * as actionTypes from './actionTypes'

const INITIAL_STATE = {
  isLoading: false,
  story: null
}

const reducer = (state = INITIAL_STATE, action) =>
  reswitch(
    actionTypes.SUBMIT_STORY,
    { isLoading: true, story: null },

    actionTypes.SUBMIT_STORY_SUCCESS,
    { isLoading: false, story: action.story }
  )(state, action.type)

export default reducer
