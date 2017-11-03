import reswitch from 'reswitch'

import * as actionTypes from './actionTypes'

const INITIAL_STATE = {
  isLoading: false,
  self: null
}

const reducer = (state = INITIAL_STATE, action) =>
  reswitch(
    actionTypes.SELF_LOGIN,
    { isLoading: true, self: null },

    actionTypes.SELF_LOGIN_SUCCESS,
    { isLoading: false, self: action.self }
  )(state, action.type)

export default reducer
