const express = require('express')

const db = require('../db/products')

const router = express.Router()

router.get('/', (req, res) => {
  db.getProducts()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  const product = {
    ...req.body,
    restockPrice: Math.trunc(req.body.price / 2),
  }
  db.addProduct(product)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
