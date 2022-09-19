import { SET_PRODUCTS } from '../actions/index.js'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PRODUCTS:
      return payload
    default:
      return state
  }
}

export default reducer
