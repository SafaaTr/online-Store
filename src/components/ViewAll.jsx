import React from 'react'
import { Link } from 'react-router-dom'

function ViewAll() {
  return (
    <div className='mx-auto '>
        <button className='w-160 h-45 bg-black text-center rounded-3xl   transition-all duration-300  hover:-translate-y-3 hover:shadow-2xl hover:tran text-white'> <Link to="/shop">View All Products</Link> </button>
    </div>
  )
}

export default ViewAll