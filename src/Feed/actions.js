import { STORIES_LATEST_FETCH, STORIES_LATEST_FETCH_SUCCESS } from './actionTypes'

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
