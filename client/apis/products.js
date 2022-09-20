import request from 'superagent'

const rootUrl = '/api/v1'

export function getProducts() {
  return request.get(rootUrl + '/products').then((res) => {
    return res.body
  })
}

export function addProduct(product, stock, price) {
  return request
    .post(rootUrl + `/products`)
    .send({ product, stock, price })
    .then((res) => {
      return res.body
    })
}
