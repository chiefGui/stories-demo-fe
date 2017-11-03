import axios from 'axios'

import endpoints from '../App/endpoints'

export function fetchUserBySlug (slug) {
  return axios.get(endpoints.users.get.bySlug(slug))
}
