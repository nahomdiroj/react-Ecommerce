import React from 'react'
import { PRODUCTS } from '../../src/products'
import { product } from "./product"
const shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
      </div>
      <div className='products'>{PRODUCTS.map((product) => (
        <product data={product} />

      ))}</div>
    </div>
  )
}

export default shop
