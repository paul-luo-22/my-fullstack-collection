import { SET_PRODUCTS, ADD_PRODUCT } from '../actions/index.js'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PRODUCTS:
      return payload
    case ADD_PRODUCT:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
