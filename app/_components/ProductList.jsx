import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({productList}) => {
  return (
    <div>
     <h2>Our Popular Products</h2>
     <h2 className='text-green-600 font-bold text-2xl'>Shop by Category</h2>
     <div>
        {
            productList.map((product,index)=>(
                <ProductItem product={product} />
            ))
        }
     </div>
    </div>
  )
}

export default ProductList
