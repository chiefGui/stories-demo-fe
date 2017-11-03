import axios from 'axios'
import endpoints from '../App/endpoints'

export function fetchLatestStories () {
  return axios.get(endpoints.stories.latest.get)
}
