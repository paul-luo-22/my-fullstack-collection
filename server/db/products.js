const connection = require('./connection')

function getProducts(db = connection) {
  return db('products').select()
}

function addProduct(product, db = connection) {
  return db('products').insert({
    product: product.product,
    stock: product.stock,
    price: product.price,
    restock_price: product.restockPrice,
  })
}

module.exports = { getProducts, addProduct }
