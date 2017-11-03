import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import selfReducer from '../Self/reducer'
import storyReducer from '../Story/reducer'
import feedReducer from '../Feed/reducer'

const rootReducer = combineReducers({
  self: selfReducer,
  story: storyReducer,
  feed: feedReducer,
  form: formReducer
})

export default rootReducer
