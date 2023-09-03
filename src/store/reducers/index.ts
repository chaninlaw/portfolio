import { combineReducers } from 'redux'
import { fetchWakaLangReducer } from './fetchWakaLangReducer'
import { fetchWakaCodeReducer } from './fetchWakaCodeReducer'

const reducers = combineReducers({
  fetchWakaLang: fetchWakaLangReducer,
  fetchWakaCode: fetchWakaCodeReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
