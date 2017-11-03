import reswitch from 'reswitch'

import * as actionTypes from './actionTypes'
import * as storyActionTypes from '../Story/actionTypes'

const INITIAL_STATE = {
  isLoading: false,
  self: null,
  stories: null,
  lastStoryBySelf: null
}

const reducer = (state = INITIAL_STATE, action) =>
  reswitch(
    actionTypes.SELF_LOGIN,
    { ...state, isLoading: true, self: null },

    actionTypes.SELF_LOGIN_SUCCESS,
    { ...state, isLoading: false, self: action.self },

    actionTypes.STORIES_LATEST_FETCH,
    { ...state, isLoading: true, stories: null, lastStoryBySelf: null },

    actionTypes.STORIES_LATEST_FETCH_SUCCESS,
    {
      ...state,
      isLoading: false,
      stories: action.stories,
      lastStoryBySelf: null
    },

    storyActionTypes.SUBMIT_STORY_SUCCESS,
    () => ({
      ...state,
      isLoading: false,
      stories: [action.story, ...state.stories],
      lastStoryBySelf: action.story
    })
  )(state, action.type)

export default reducer
