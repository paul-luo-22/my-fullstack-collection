import request from 'superagent'

const rootUrl = '/api/v1'

export function getProducts() {
  return request.get(rootUrl + '/products').then((res) => {
    console.log('API: ', res.body)
    return res.body
  })
}
