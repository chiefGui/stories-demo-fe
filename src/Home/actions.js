import {
  SELF_LOGIN,
  SELF_LOGIN_SUCCESS,
  STORIES_LATEST_FETCH,
  STORIES_LATEST_FETCH_SUCCESS
} from './actionTypes'

export function login () {
  return {
    type: SELF_LOGIN
  }
}

export function loginSuccess (self) {
  return {
    type: SELF_LOGIN_SUCCESS,
    self
  }
}

export function storiesLatestFetch () {
  return {
    type: STORIES_LATEST_FETCH
  }
}

export function storiesLatestFetchSuccess (stories) {
  return {
    type: STORIES_LATEST_FETCH_SUCCESS,
    stories
  }
}
