import { Action } from '../actions'
import { ActionType } from '../actionTypes'

interface WakaCodeData {
  best_day: {
    date: string
    text: string
    total_seconds: number
  }
  grand_total: {
    daily_average: number
    daily_average_including_other_language: number
    human_readable_daily_average: string
    human_readable_daily_average_including_other_language: string
    human_readable_total: string
    human_readable_total_including_other_language: string
    total_seconds: number
    total_seconds_including_other_language: number
  }
  range: {
    start: string
    end: string
    range: string
    days_including_holidays: number
    days_minus_holidays: number
    holidays: number
  }
}

interface FetchingState {
  loading: boolean
  error: string | null
  data: WakaCodeData | null
}

const initialState = {
  loading: false,
  error: null,
  data: null,
}

export const fetchWakaCodeReducer = (
  state: FetchingState = initialState,
  action: Action
): FetchingState => {
  switch (action.type) {
    case ActionType.FETCHWAKA_CODE:
      return { ...state, loading: true, error: null, data: null }
    case ActionType.FETCHWAKA_CODE_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload }
    case ActionType.FETCHWAKA_CODE_ERROR:
      return { ...state, loading: false, error: action.payload, data: null }
    default:
      return state
  }
}

