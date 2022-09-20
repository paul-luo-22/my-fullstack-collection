import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchProducts, addNewProduct } from '../actions/index'

const initialData = {
  product: '',
  stock: '',
  price: '',
}

export default function AddItem() {
  const [form, setForm] = useState(initialData)
  const dispatch = useDispatch()

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addNewProduct(form.product, form.stock, form.price))
    dispatch(fetchProducts())
  }

  return (
    <div>
      <h3 className="text-center">Add a Pet</h3>
      <form name="addPetForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product"> </label>
          <input
            id="product"
            type="text"
            name="product"
            placeholder="Product"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="stock"> </label>
          <input
            id="stock"
            type="text"
            name="stock"
            placeholder="Stock"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price"> </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
