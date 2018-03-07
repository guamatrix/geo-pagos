import * as actionTypes from './commonTypes'

export const addApplication = application => (
  {
    type: actionTypes.ADD_APPLICATION,
    application,
  }
)

export const deleteApplication = index => (
  {
    type: actionTypes.DELETE_APPLICATION,
    index,
  }
)
