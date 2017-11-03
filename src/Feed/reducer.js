import reswitch from 'reswitch'

import * as actionTypes from './actionTypes'
import * as storyActionTypes from '../Story/actionTypes'

const INITIAL_STATE = {
  isLoading: false,
  stories: null
}

const reducer = (state = INITIAL_STATE, action) =>
  reswitch(
    actionTypes.STORIES_LATEST_FETCH,
    { isLoading: true, stories: null },

    actionTypes.STORIES_LATEST_FETCH_SUCCESS,
    { isLoading: false, stories: action.stories },

    storyActionTypes.SUBMIT_STORY_SUCCESS,
    () => ({ isLoading: false, stories: [action.story, ...state.stories] })
  )(state, action.type)

export default reducer
