import { SELF_LOGIN, SELF_LOGIN_SUCCESS } from './actionTypes'

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
