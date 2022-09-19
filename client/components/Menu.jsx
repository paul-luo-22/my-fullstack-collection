import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../actions/index'

function Menu() {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  function deleteItem(e) {
    console.log(e)
  }

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {products.map(({ id, product, stock, price }) => (
          <div key={id}>
            <li className="products" key={product + id}>
              Item: {product} Stock: {stock} Price: {price}
              <button onClick={deleteItem}>Delete</button>
            </li>
          </div>
        ))}
      </ul>
      <button type="submit">Submit</button>
    </div>
  )
}

export default Menu
