import React from 'react'

import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {

  const navigate =useNavigate();
  
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)} className='productCard w-[16rem] m-3 transition-all cursor-pointer '>
      <div >
        <img className=' w-full object-cover object-left-top'  style={{ height:'320px' }} src={product.imageUrl} alt='' />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60 text-left '>{product.brand}</p>
          <p className='text-left'>{product.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
            <p className='font-semibold'>₹{product.discountedPrice}</p>
            <p className='line-through opacity-50'>₹{product.price}</p>
            <p className=' text-green-600 font-semibold'>{product.discountPresent} % off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
