import rootReducer from '../reducers'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'


export default function configureStore(initialState) {
  const logger = createLogger()
  const redux = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  let store = createStore(rootReducer, redux, applyMiddleware(thunk,logger))
  return store
}