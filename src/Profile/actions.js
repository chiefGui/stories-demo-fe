import * as actionTypes from './actionTypes'

export function fetchUser (slug) {
  return {
    type: actionTypes.FETCH_USER,
    slug
  }
}

export function fetchUserSuccess (user) {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    user
  }
}
