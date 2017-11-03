import reswitch from 'reswitch'

import * as actionTypes from './actionTypes'

const INITIAL_STATE = {
  isLoading: false,
  user: null
}

const reducer = (state = INITIAL_STATE, action) =>
  reswitch(
    actionTypes.FETCH_USER,
    { isLoading: true, user: null },

    actionTypes.FETCH_USER_SUCCESS,
    { isLoading: false, user: action.user }
  )(state, action.type)

export default reducer
