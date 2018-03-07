/* eslint import/prefer-default-export: 0 */

// import { fromJS } from 'immutable'
import * as commonTypes from './actions/commonTypes'

// const initialState = fromJS({
//   applications: { 1: { name: 'casa' } },
// })
const initialState = {
  applications: [],
}

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
  case commonTypes.ADD_APPLICATION: {
    return { applications: [...state.applications, action.application] }
  }
  case commonTypes.DELETE_APPLICATION: {
    return { applications: [
      ...state.applications.slice(0, action.index),
      ...state.applications.slice(action.index + 1),
    ] }
  }
  default: return state
  }
}
