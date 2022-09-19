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

module.exports = router
