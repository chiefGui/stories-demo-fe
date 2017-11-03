import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'

import { baseURL } from './endpoints'
import configureStore from '../Store'
import rootSaga from '../Store/rootSaga'
import Home from '../Home'
import './globals.css'
import './firebase'

const store = configureStore()
store.runSaga(rootSaga)

// Axios settings
axios.defaults.baseURL = baseURL()
axios.defaults.headers.post['Content-Type'] = 'application/json'

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  </Provider>
)

export default App
