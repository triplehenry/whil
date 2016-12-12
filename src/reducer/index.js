import { combineReducers } from 'redux'
import news from './news_reducer'
import app from './app_reducer'

export default combineReducers({
  app,
  news,
})
