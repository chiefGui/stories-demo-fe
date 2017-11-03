import axios from 'axios'
import endpoints from '../App/endpoints'

export function submitStory (story, userID) {
  return axios.post(endpoints.stories.post, { story, userID })
}
