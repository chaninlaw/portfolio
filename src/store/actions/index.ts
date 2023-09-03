import { ActionType } from '../actionTypes'

interface FetchWakaLangAction {
  type: ActionType.FETCHWAKA_LANG
}

interface FetchWakaLangSuccessAction {
  type: ActionType.FETCHWAKA_LANG_SUCCESS
  payload: any
}

interface FetchWakaLangErrorAction {
  type: ActionType.FETCHWAKA_LANG_ERROR
  payload: string
}

interface FetchWakaCodeAction {
  type: ActionType.FETCHWAKA_CODE
}

interface FetchWakaCodeSuccessAction {
  type: ActionType.FETCHWAKA_CODE_SUCCESS
  payload: any
}

interface FetchWakaCodeErrorAction {
  type: ActionType.FETCHWAKA_CODE_ERROR
  payload: string
}

export type Action =
  | FetchWakaLangAction
  | FetchWakaLangSuccessAction
  | FetchWakaLangErrorAction
  | FetchWakaCodeAction
  | FetchWakaCodeSuccessAction
  | FetchWakaCodeErrorAction
