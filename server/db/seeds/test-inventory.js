/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      id: 1,
      product: 'White Coffee',
      stock: 4,
      price: 4,
      restock_price: 1,
    },
    {
      id: 2,
      product: 'Black Coffee',
      stock: 7,
      price: 3,
      restock_price: 1,
    },
    {
      id: 3,
      product: 'Muffin',
      stock: 5,
      price: 5,
      restock_price: 2,
    },
    {
      id: 4,
      product: 'Eggs',
      stock: 10,
      price: 9,
      restock_price: 3,
    },
  ])
}
