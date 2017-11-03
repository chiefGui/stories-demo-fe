import axios from 'axios'

import endpoints from '../App/endpoints'

export function registerUser (user) {
  return axios.post(endpoints.users.post, user)
}
