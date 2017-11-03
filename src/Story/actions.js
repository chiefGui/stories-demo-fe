import { SUBMIT_STORY, SUBMIT_STORY_SUCCESS } from './actionTypes'

export function submitStory ({ story, userID }) {
  // Story normalization
  const hydratedStory = {
    title: story.label,
    description: story.description || null
  }

  return {
    type: SUBMIT_STORY,
    story: hydratedStory,
    userID
  }
}

export function submitStorySuccess (story) {
  return {
    type: SUBMIT_STORY_SUCCESS,
    story
  }
}
