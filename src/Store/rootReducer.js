import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import homeReducer from '../Home/reducer'
import storyReducer from '../Story/reducer'
import profileReducer from '../Profile/reducer'

const rootReducer = combineReducers({
  home: homeReducer,
  story: storyReducer,
  profile: profileReducer,
  form: formReducer
})

export default rootReducer
