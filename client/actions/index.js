import { getProducts, addProduct } from '../apis/products'

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'

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

export function createProduct(product, stock, price) {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
      stock,
      price,
    },
  }
}

export function addNewProduct(product, stock, price) {
  return (dispatch) => {
    return addProduct(product, stock, price).then((res) => {
      dispatch(createProduct(res))
    })
  }
}
