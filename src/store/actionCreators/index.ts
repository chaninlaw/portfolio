import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../actionTypes'
import { Action } from '../actions'

export const fetchWakaLangs = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCHWAKA_LANG,
    })

    try {
      const {
        data: { data },
      } = await axios.get(import.meta.env.VITE_WAKATIME_LANGUAGES_API)
      dispatch({
        type: ActionType.FETCHWAKA_LANG_SUCCESS,
        payload: data,
      })
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.FETCHWAKA_LANG_ERROR,
          payload: err.message,
        })
      }
    }
  }
}

export const fetchWakaCode = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCHWAKA_CODE,
    })

    try {
      const { data: { data } } = await axios.get(import.meta.env.VITE_WAKATIME_CODE_API)

      dispatch({
        type: ActionType.FETCHWAKA_CODE_SUCCESS,
        payload: data,
      })
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.FETCHWAKA_CODE_ERROR,
          payload: err.message,
        })
      }
    }
  }
}
