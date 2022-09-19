import { getProducts } from '../apis/products'

export const SET_PRODUCTS = 'SET_PRODUCTS'

export function setProducts(products) {
  console.log('Set: ', products)
  return {
    type: SET_PRODUCTS,
    payload: products,
  }
}

export function fetchProducts() {
  return (dispatch) => {
    return getProducts().then((products) => {
      console.log('Fetch: ', products)
      dispatch(setProducts(products))
    })
  }
}
