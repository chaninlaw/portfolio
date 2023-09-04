import { Action } from '../actions'
import { ActionType } from '../actionTypes'

export interface WakaLangsData {
  name: string
  percent: number
  color: string
  decimal: string
  digital: string
  hours: number
  minutes: number
  text: string
  total_seconds: number
}

interface FetchingState {
  loading: boolean
  error: string | null
  data: WakaLangsData[]
}

const initialState = {
  loading: false,
  error: null,
  data: [],
}

export const fetchWakaLangReducer = (
  state: FetchingState = initialState,
  action: Action
): FetchingState => {
  switch (action.type) {
    case ActionType.FETCHWAKA_LANG:
      return { ...state, loading: true, error: null, data: [] }
    case ActionType.FETCHWAKA_LANG_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload }
    case ActionType.FETCHWAKA_LANG_ERROR:
      return { ...state, loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}
